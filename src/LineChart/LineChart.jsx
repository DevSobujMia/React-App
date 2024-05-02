import { LineChart as LChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: 'Alice', math: 55, physics: 75, chemistry: 40 },
        { id: 2, name: 'Bob', math: 46, physics: 68, chemistry: 33 },
        { id: 3, name: 'Charlie', math: 50, physics: 62, chemistry: 68 },
        { id: 4, name: 'David', math: 48, physics: 60, chemistry: 75 },
        { id: 5, name: 'Emily', math: 65, physics: 50, chemistry: 62 },
        { id: 6, name: 'Frank', math: 80, physics: 58, chemistry: 55 },
        { id: 7, name: 'Grace', math: 88, physics: 62, chemistry: 75 },
        { id: 8, name: 'Henry', math: 48, physics: 75, chemistry: 90 },
        { id: 9, name: 'Isabella', math: 65, physics: 60, chemistry: 72 },
        { id: 10, name: 'Jack', math: 82, physics: 66, chemistry: 98 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
                <Line type="monotone" dataKey="chemistry" stroke="#ffc658" />
            </LChart>
        </div>
    );
};

export default LineChart;
