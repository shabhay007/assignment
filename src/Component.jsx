import React from 'react';
import './Component.css'
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import flower2 from './Images/flower2.svg'
import pic1 from './Images/pic1.png'
import pic2 from './Images/pic2.png'
import pic3 from './Images/pic3.png'
import pic4 from './Images/pic4.png'
import pic5 from './Images/pic5.png'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Component = () => {
    return (
        <div className='parentcontainer'>
            <div className="container1">
                <div className="card1">
                    <div className='hira' style={{ 'font-weight': '600', 'font-size': '18px', 'color': 'rgb(181, 63, 82' }}>Hira R.</div>
                    <div className='uxui'>UX/UI Designer</div>
                    <div className="dollar">
                        <div className='project'>
                            <div>125</div>
                            <div>Projects</div>
                        </div>
                        <div className='project'>
                            <div>$124</div>
                            <div>Revenue</div>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className='dashboard'>
                        <div className='ksjdfkfei'><SnippetFolderOutlinedIcon /></div>
                        <div className='kdfkksd'>Dashboard</div>
                    </div>
                    <div className='email'>
                        <div className='ksjdfkfei'><MailOutlineIcon /></div>
                        <div className='kdfkksd'>Email</div>
                    </div>
                    <div className='email'>
                        <div className='ksjdfkfei'><CalendarTodayIcon /></div>
                        <div className='kdfkksd'>Calendar</div>
                    </div>
                    <div className='email'>
                        <div className='ksjdfkfei'><EqualizerIcon /></div>
                        <div className='kdfkksd'>Graph</div>
                    </div>
                    <div className='email'>
                        <div className='ksjdfkfei'><InsertDriveFileOutlinedIcon /></div>
                        <div className='kdfkksd'>Forms</div>
                    </div>
                </div>
                <div className="card3">
                    <div className='woieuriowe'>
                        <div style={{ "fontWeight": '700' }}>Go Pro</div>
                        <div>Upgrade your plan to get pro benefits</div>
                        <div className='weuroiwe'>Let's Start</div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="contcard1">
                    <div className='jkjksakk'>
                        <div className='weqiuwoquw'>$</div>
                    </div>
                    <div style={{ "padding": '13px 0' }}>
                        <div>Total Revenue</div>
                        <div>$92,983</div>
                        <div className='wiueyiksdhjks'>
                            <div className='wieuirowiowie'></div>
                        </div>
                    </div>
                </div>
                <div className="contcard2">
                    <div className="travel">
                        <div className='weouriwerwye'>Travel</div>
                        <div style={{ 'font-size': '15px', 'font-weight': '450' }}>Mobile Application</div>
                        <div style={{ 'font-size': '13px' }}>Seen by</div>
                        <div className="circularpic">
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '4', 'left': '-12px', }}></img>
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '3', 'left': '-25px', }}></img>
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '2', 'left': '-35px', }}></img>
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '1', 'left': '-45px', }}></img>
                        </div>
                        <div>
                            <button className='tour'>Tour</button>
                            <button className='tourbtn'>Trip</button>
                        </div>
                        <div><button className='tourbtn'>Transport</button></div>
                    </div>
                    <div className="hotel">
                        <div className='weouriwerwye'>Hotel</div>
                        <div style={{ 'font-size': '15px', 'font-weight': '450' }}>Dashboard</div>
                        <div style={{ 'font-size': '13px' }}>Seen by</div>
                        <div className="circularpic">
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '4', 'left': '-12px', }}></img>
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '3', 'left': '-25px', }}></img>
                            <img src={pic2} alt='img' height={'30px'} width={'30px'} style={{ 'borderRadius': '20px', 'position': 'relative', 'z-index': '2', 'left': '-35px', }}></img>
                        </div>
                        <div>
                            <button className='tour'>Tour</button>
                            <button className='tourbtn'>Trip</button>
                        </div>
                        <div><button className='tourbtn'>Transport</button></div>
                    </div>
                </div>
                <div className="slots">
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                        <div style={{ 'font-weight': '600', 'margin-left': '13px', 'height': '70px', 'display': 'flex', 'alignItems': 'center' }}>Free Slots Available</div>
                        <div className='weiuyasjasgjk'>
                            <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='date'>
                        <div className='june' style={{ 'background-color': 'rgb(181, 63, 82' }}>12 <br />June</div>
                        <div className='june'>18 <br />June</div>
                        <div className='june'>20 <br />June</div>
                        <div className='june'>02 <br />July</div>
                        <div className='june'>10 <br />July</div>
                        <div className='june'>15 <br />July</div>
                    </div>
                </div>
            </div>
            <div className="container3">
                <div className="contmycard1">
                    <div>
                        <img src={flower2} height={'110px'} width={'80px'} />
                    </div>
                    <div className='weiabhay'>
                        <div style={{ 'font-size': 'px', 'font-weight': '700' }}>Dear Client</div>
                        <div style={{ 'font-size': '14px' }}>Join our online community. It helps in managing your projects</div>
                    </div>
                    <div className='lessthan'><div className='lessdfjsjfl'>&lt;</div></div>
                </div>
                <div className="contmycard2">
                    <div style={{ 'display': 'flex' }}>
                        <div className='weiuwenvsnsgs'>
                            <div >Transaction Detail</div>
                            <div style={{ 'fontWeight': '500', 'fontSize': '18px', 'padding-top': '10px' }}>Hi Hira</div>
                            <div style={{ 'fontWeight': '500', 'fontSize': '18px', 'padding-top': '10px' }}>$4,763.40</div>
                            <div style={{ 'fontSize': '12px', 'padding-top': '7px' }}>Available Balance</div>
                        </div>
                        <div>
                            <div className="ytksdifppppooio"><img src={pic2} height={'40px'} width={'40px'} style={{ 'borderRadius': '50%' }} /></div>
                            <div style={{ 'font-size': '10px', 'padding-top': '30px' }}>****3863</div>
                        </div>
                    </div>
                    <div className="profile" style={{ 'display': 'flex', 'margin': '20px 0' }}>
                        <div><ArrowCircleRightOutlinedIcon /></div>
                        <div style={{ 'margin-left': '10px' }}><img src={pic2} height={'30px'} width={'30px'} style={{ 'border-radius': '20px' }} /></div>
                        <div style={{ 'margin-left': '10px' }}><img src={pic2} height={'30px'} width={'30px'} style={{ 'border-radius': '20px' }} /></div>
                        <div style={{ 'margin-left': '10px' }}><img src={pic2} height={'30px'} width={'30px'} style={{ 'border-radius': '20px' }} /></div>
                        <div style={{ 'margin-left': '10px' }}><img src={pic2} height={'30px'} width={'30px'} style={{ 'border-radius': '20px' }} /></div>
                    </div>
                    <div>
                        <button className='sendbtn'>Send</button>
                    </div>
                </div>
                <div className="contmycard3">
                    <div className="first">
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                            <div style={{ 'font-weight': '500' }}>Project Details</div>
                            <div className='weiwfsjfhiuwhef'>
                                <MoreVertOutlinedIcon />
                            </div>
                        </div>
                        <div style={{ 'font-size': '18px', 'font-weight': '700', 'color': 'rgb(181, 63, 82' }}>Hira R.</div>
                        <div style={{ 'font-size': '12px' }}>UX/UI Designer</div>
                        <div style={{ 'font-size': '14px', 'font-weight': '500' }}>Projects Progress</div>
                        <div className="seventyfive" style={{ "display": "flex", "flexDirection": "row-reverse", 'margin-right': '10px', 'margin-bottom': '4px' }}>75%</div>
                        <div className='lastbar'>
                            <div className='lstb'></div>
                        </div>
                    </div>
                    <div className="second">
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                            <div style={{ 'font-weight': '500' }}>Project Progress</div>
                            <div className='weiwfsjfhiuwhef'>
                                <MoreVertOutlinedIcon />
                            </div>
                        </div>
                        <div className='centbtn'>
                            <button className='percentbtn'>75%</button>
                        </div>
                        <div style={{ 'font-size': '10px' }}>3 Remaining Projects</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component