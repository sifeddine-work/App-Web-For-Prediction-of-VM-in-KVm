import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { GrVmware } from "react-icons/gr";
import { VscVmRunning } from "react-icons/vsc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const Sidebar = () =>{
    return (
        <>
            <div className="sidebar">
                <ul >
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard/></span>
                                Dashboard
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><GrVmware/></span>
                                VMList
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><VscVmRunning/></span>
                                VMDetails
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><TbDeviceDesktopAnalytics/></span>
                                PredictionChart
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}   
export default Sidebar;