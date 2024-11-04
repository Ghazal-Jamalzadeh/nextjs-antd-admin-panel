"use client"
import {Space, Table, Tag} from "antd";
import React from 'react' ;


function LearningTable() {
    const columns = [
        {
            title: 'Course Name',
            dataIndex: 'courseName',
            key: 'courseName'
        }, {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration'
        }, {
            title: 'Level',
            dataIndex: 'level',
            key: 'level'
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => <Tag
                color={text === 'completed' ? "green" : text === 'not started' ? 'red' : 'blue'}>{text}</Tag>,
        }, {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text) =>
                <Space size={"middle"}>
                    <a>View</a>
                    <a>Delete</a>
                </Space>,
        },
    ]
    const data = [
        {
            id: "1",
            courseName: 'Kotlin Tutorial',
            duration: '20 hours',
            level: 'Beginner',
            status: 'completed'
        },
        {
            id: "2",
            courseName: 'Java Tutorial',
            duration: '25 hours',
            level: 'Beginner',
            status: 'in progress'
        },
        {
            id: "3",
            courseName: 'Flutter Tutorial',
            duration: '50 hours',
            level: 'Advanced',
            status: 'not started'
        },
        {
            id: "4",
            courseName: 'JavaScript Basics',
            duration: '30 hours',
            level: 'Beginner',
            status: 'completed'
        },
        {
            id: "5",
            courseName: 'React for Beginners',
            duration: '40 hours',
            level: 'Intermediate',
            status: 'in progress'
        },
        {
            id: "6",
            courseName: 'Python Programming',
            duration: '35 hours',
            level: 'Beginner',
            status: 'completed'
        },
        {
            id: "7",
            courseName: 'Data Structures and Algorithms',
            duration: '45 hours',
            level: 'Advanced',
            status: 'not started'
        },
        {
            id: "8",
            courseName: 'Django Web Development',
            duration: '60 hours',
            level: 'Intermediate',
            status: 'in progress'
        },
        {
            id: "9",
            courseName: 'Node.js for Beginners',
            duration: '30 hours',
            level: 'Beginner',
            status: 'completed'
        },
        {
            id: "10",
            courseName: 'Machine Learning with Python',
            duration: '50 hours',
            level: 'Advanced',
            status: 'not started'
        },
        {
            id: "11",
            courseName: 'C++ Programming',
            duration: '40 hours',
            level: 'Intermediate',
            status: 'in progress'
        },
        {
            id: "12",
            courseName: 'Swift for iOS Development',
            duration: '30 hours',
            level: 'Beginner',
            status: 'completed'
        },
        {
            id: "13",
            courseName: 'PHP for Web Development',
            duration: '35 hours',
            level: 'Intermediate',
            status: 'not started'
        },
        {
            id: "14",
            courseName: 'Ruby on Rails',
            duration: '45 hours',
            level: 'Intermediate',
            status: 'in progress'
        },
        {
            id: "15",
            courseName: 'Go Programming Language',
            duration: '40 hours',
            level: 'Intermediate',
            status: 'completed'
        }
    ];

    return (
        < Table
            className='mt-4'
            columns={columns}
            dataSource={data}
            rowKey="id" // Use the id as the unique key for each row
        />

    )
}

export default LearningTable;

