import "./adminOverview.scss"
import { Grid } from "@mui/material"
import { FaUserFriends } from "react-icons/fa"
import { MdBorderColor } from "react-icons/md"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
export default function Overview() {
  return(
    <div className="overview">
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={12} lg={12} >
         <div className="overview-stat" >
          <h2>Overview Stat</h2>
          <p>This is Stat of your product</p>
         <div className="stat" >
          <div className="stat-box" >
            <FaUserFriends className="svgg"/>
           <div className="stat-box-detail" >
            <span className="stat-name">User</span>
            <span>0</span>
           </div>
          </div>
           <div className="stat-box" >
             <MdBorderColor className="svgg"/>
            <div className="stat-box-detail" >
             <span className="stat-name">Order</span>
             <span>0</span>
            </div>
           </div>
           <div className="stat-box" >
            <FaMoneyBillTrendUp className="svgg"/>
           <div className="stat-box-detail" >
            <span className="stat-name">Earning</span>
            <span>0$</span>
           </div>
          </div>
         </div>
         </div>
        </Grid>
      </Grid>
      <div className="chart" >
      <h2 style={{marginLeft: "10px"}}>Money Earning Per Month</h2>
      <LineChart
  xAxis={[{ data: [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10 ,11 ,12] }]}
  series={[
    {
      data: [0,0,0],
    },
  ]}
  margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
  grid={{ vertical: true, horizontal: true }}
  height={300}
/>
      </div>
      <div className="transaction">
       <h2>Lastest Transaction</h2>
      <hr/>
       <div className="tran-box">
         <p> You dont have any transaction right now</p>
       </div>
      </div>
    </div>
  )
}