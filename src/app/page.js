import {Button, Card, Col, Flex, Row, Typography} from "antd";
import {CrownOutlined, FilePdfOutlined, HddOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import HomeCrads from "@/components/HomeCrads";
import LearningTable from "@/components/LearningTable";

export default function Home() {
    return (
        <Row gutter={16}>
            <Col span={17}>

                <HomeCrads/>

                <LearningTable/>
            </Col>
            <Col span={7}>progress</Col>

        </Row>

    );
}
