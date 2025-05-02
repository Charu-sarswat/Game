import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ChartData {
    label: string;
    value: number;
}

interface ChartProps {
    data: ChartData[];
    type: 'bar' | 'line' | 'pie' | 'radar';
    colors: string[];
}

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const CanvasContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

const ChartCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

export const Chart: React.FC<ChartProps> = ({ data, type, colors }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions based on parent container
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw chart based on type
        switch (type) {
            case 'bar':
                drawBarChart(ctx, canvas.width, canvas.height, data, colors);
                break;
            case 'line':
                drawLineChart(ctx, canvas.width, canvas.height, data, colors);
                break;
            case 'pie':
                drawPieChart(ctx, canvas.width, canvas.height, data, colors);
                break;
            case 'radar':
                drawRadarChart(ctx, canvas.width, canvas.height, data, colors);
                break;
        }
    }, [data, type, colors]);

    // Bar chart
    const drawBarChart = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        data: ChartData[],
        colors: string[]
    ) => {
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        const barCount = data.length;
        const barWidth = chartWidth / barCount * 0.6;
        const barSpacing = chartWidth / barCount * 0.4 / (barCount - 1 || 1);

        // Find max value for scaling
        const maxValue = Math.max(...data.map(item => item.value));

        // Draw axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        // X-axis
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        // Y-axis
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.stroke();

        // Draw horizontal grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;

        const gridCount = 5;
        for (let i = 0; i <= gridCount; i++) {
            const y = height - padding - (i / gridCount) * chartHeight;

            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();

            // Draw y-axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'right';
            ctx.fillText((maxValue * i / gridCount).toFixed(0), padding - 5, y + 3);
        }

        // Draw bars
        data.forEach((item, index) => {
            const barHeight = (item.value / maxValue) * chartHeight;
            const x = padding + index * (barWidth + barSpacing);
            const y = height - padding - barHeight;

            // Create gradient
            const gradient = ctx.createLinearGradient(x, y, x, height - padding);
            gradient.addColorStop(0, colors[index % colors.length]);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');

            // Draw bar
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, barHeight, [5, 5, 0, 0]);
            ctx.fill();

            // Add glow effect
            ctx.shadowColor = colors[index % colors.length];
            ctx.shadowBlur = 10;
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.3;
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            ctx.globalCompositeOperation = 'source-over';

            // Draw label
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.label, x + barWidth / 2, height - padding + 15);

            // Draw value
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5);
        });
    };

    // Line chart
    const drawLineChart = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        data: ChartData[],
        colors: string[]
    ) => {
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        // Find max value for scaling
        const maxValue = Math.max(...data.map(item => item.value)) * 1.2;

        // Draw axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        // X-axis
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        // Y-axis
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.stroke();

        // Draw horizontal grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;

        const gridCount = 5;
        for (let i = 0; i <= gridCount; i++) {
            const y = height - padding - (i / gridCount) * chartHeight;

            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();

            // Draw y-axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'right';
            ctx.fillText((maxValue * i / gridCount).toFixed(0), padding - 5, y + 3);
        }

        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = colors[0];
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';

        // Create gradient for fill
        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
        gradient.addColorStop(0, `${colors[0]}33`); // 20% opacity
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        // Draw points and connect with line
        data.forEach((item, index) => {
            const x = padding + (index / (data.length - 1)) * chartWidth;
            const y = height - padding - (item.value / maxValue) * chartHeight;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            // Draw x-axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.label, x, height - padding + 15);
        });

        ctx.stroke();

        // Fill area under the line
        ctx.lineTo(padding + chartWidth, height - padding);
        ctx.lineTo(padding, height - padding);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw points
        data.forEach((item, index) => {
            const x = padding + (index / (data.length - 1)) * chartWidth;
            const y = height - padding - (item.value / maxValue) * chartHeight;

            // Outer circle
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = colors[0];
            ctx.fill();

            // Inner circle
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();

            // Draw value above point
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.value.toString(), x, y - 10);
        });
    };

    // Pie chart
    const drawPieChart = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        data: ChartData[],
        colors: string[]
    ) => {
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 40;

        // Calculate total value
        const total = data.reduce((sum, item) => sum + item.value, 0);

        // Draw segments
        let startAngle = -Math.PI / 2; // Start at 12 o'clock

        data.forEach((item, index) => {
            const sliceAngle = (item.value / total) * (Math.PI * 2);
            const endAngle = startAngle + sliceAngle;

            // Draw slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();

            // Create gradient
            const gradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, radius
            );
            gradient.addColorStop(0, '#fff');
            gradient.addColorStop(0.7, colors[index % colors.length]);
            gradient.addColorStop(1, colors[index % colors.length]);

            ctx.fillStyle = gradient;
            ctx.fill();

            // Add stroke
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw percentage in the middle of the slice
            const middleAngle = startAngle + sliceAngle / 2;
            const percentageX = centerX + Math.cos(middleAngle) * (radius * 0.7);
            const percentageY = centerY + Math.sin(middleAngle) * (radius * 0.7);

            const percentage = ((item.value / total) * 100).toFixed(0) + '%';

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(percentage, percentageX, percentageY);

            startAngle = endAngle;
        });

        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fill();

        // Draw total in center
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Total', centerX, centerY - 10);
        ctx.fillText(total.toString(), centerX, centerY + 10);
    };

    // Radar chart
    const drawRadarChart = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        data: ChartData[],
        colors: string[]
    ) => {
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 40;
        const categories = data.length;

        // Draw axes
        for (let i = 0; i < categories; i++) {
            const angle = (i / categories) * Math.PI * 2 - Math.PI / 2;
            const axisX = centerX + Math.cos(angle) * radius;
            const axisY = centerY + Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(axisX, axisY);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.stroke();

            // Draw category label
            const labelX = centerX + Math.cos(angle) * (radius + 15);
            const labelY = centerY + Math.sin(angle) * (radius + 15);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(data[i].label, labelX, labelY);
        }

        // Draw concentric circles
        for (let i = 1; i <= 5; i++) {
            const levelRadius = radius * (i / 5);

            ctx.beginPath();
            ctx.arc(centerX, centerY, levelRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.stroke();

            // Draw percentage labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${i * 20}%`, centerX, centerY - levelRadius);
        }

        // Draw data polygon
        ctx.beginPath();

        data.forEach((item, index) => {
            const value = Math.min(item.value, 100); // Cap at 100%
            const scaledRadius = radius * (value / 100);
            const angle = (index / categories) * Math.PI * 2 - Math.PI / 2;
            const pointX = centerX + Math.cos(angle) * scaledRadius;
            const pointY = centerY + Math.sin(angle) * scaledRadius;

            if (index === 0) {
                ctx.moveTo(pointX, pointY);
            } else {
                ctx.lineTo(pointX, pointY);
            }
        });

        ctx.closePath();

        // Create gradient fill
        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, radius
        );
        gradient.addColorStop(0, `${colors[0]}99`); // 60% opacity
        gradient.addColorStop(1, `${colors[0]}33`); // 20% opacity

        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw stroke
        ctx.lineWidth = 2;
        ctx.strokeStyle = colors[0];
        ctx.stroke();

        // Draw points
        data.forEach((item, index) => {
            const value = Math.min(item.value, 100); // Cap at 100%
            const scaledRadius = radius * (value / 100);
            const angle = (index / categories) * Math.PI * 2 - Math.PI / 2;
            const pointX = centerX + Math.cos(angle) * scaledRadius;
            const pointY = centerY + Math.sin(angle) * scaledRadius;

            // Draw point
            ctx.beginPath();
            ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.strokeStyle = colors[0];
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw value
            const valueX = centerX + Math.cos(angle) * (scaledRadius + 15);
            const valueY = centerY + Math.sin(angle) * (scaledRadius + 15);

            ctx.fillStyle = colors[0];
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value.toString() + '%', valueX, valueY);
        });
    };

    return (
        <ChartContainer>
            <CanvasContainer>
                <ChartCanvas ref={canvasRef} />
            </CanvasContainer>
            {type === 'bar' && (
                <Legend>
                    {data.map((item, index) => (
                        <LegendItem key={index}>
                            <LegendColor color={colors[index % colors.length]} />
                            {item.label}
                        </LegendItem>
                    ))}
                </Legend>
            )}
        </ChartContainer>
    );
}; 