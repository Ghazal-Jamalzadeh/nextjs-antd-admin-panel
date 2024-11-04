import {Card, Col, Rate, Row, Space} from "antd";
import HomeCrads from "@/components/HomeCrads";
import LearningTable from "@/components/LearningTable";
import ProgressComponent from "@/components/Progress";
import Title from "antd/es/typography/Title";

export default function Home() {
    return (
        <Row gutter={16}>
            <Col span={17}>

                <HomeCrads/>

                <LearningTable/>
            </Col>
            <Col span={7}>
                <ProgressComponent/>
                <Title level={5} className='mt-4'>Popular Courses</Title>
                <Space direction="vertical" className='w-full'>
                   <Card>
                       <Title level={5}>
                           Android architectures
                       </Title>
                       <Rate disabled defaultValue={5}/>
                   </Card>

                    <Card>
                        <Title level={5}>
                            Design patterns
                        </Title>
                        <Rate disabled defaultValue={3}/>
                    </Card>

                    <Card>
                        <Title level={5}>
                           Clean code
                        </Title>
                        <Rate disabled defaultValue={4}/>
                    </Card>
                </Space>
            </Col>

        </Row>

    );
}
