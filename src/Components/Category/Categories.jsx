import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import male from '../../Assets/male.jpg'
import female from '../../Assets/female.jpg'
import unisex from '../../Assets/unisex.jpg'
import { Link } from 'react-router-dom';

function GroupExample() {
    return (
        <>
            <div className='mt-4' style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="card md-4" style={{ width: '97%' }}></div>
                <div className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 className='mt-2'>Categories</h1>
                    <div className="underline mb-4"></div>
                </div>
                <CardGroup style={{ justifyContent: 'center' }}>
                    <CardGroup style={{ backgroundColor: 'transparent' }}>
                        <Link to='/category/male'>
                            <Card style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={male} style={{ height: '50vh' }} />
                                <Card.Body>
                                    <h2 style={{ color: 'white' }}>Male</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to='/category/female'>
                            <Card style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={female} style={{ height: '50vh' }} />
                                <Card.Body>
                                    <h2 style={{ color: 'white' }}>Female</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </CardGroup>

                    <CardGroup style={{ backgroundColor: 'transparent' }}>
                        <Link to='/category/unisex'>
                            <Card style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={unisex} style={{ height: '60vh' }} />
                                <Card.Body>
                                    <h2 style={{ color: 'white' }}>Unisex</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </CardGroup>
                </CardGroup>
            </div>
            <div className="card md-4" style={{ width: '97%' }}></div>

        </>
    );
}

export default GroupExample;