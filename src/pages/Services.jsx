
import "../Styles/global.css"; // Ensure this file is imported

import { Grid, Typography, Paper } from "@mui/material";
import { FaLaptopCode, FaChartBar, FaUsers, FaDatabase, FaShieldAlt, FaMobileAlt, FaMoneyCheckAlt, FaCog, FaBullseye, FaCloud, FaProjectDiagram } from "react-icons/fa";


const services = [
  { icon: <FaLaptopCode />, title: "Software Development", description: "Custom solutions for your business needs." },
  { icon: <FaChartBar />, title: "Data Analytics", description: "Transform data into actionable insights." },
  { icon: <FaUsers />, title: "Customer Engagement", description: "Improve user interactions and retention." },
  { icon: <FaDatabase />, title: "Database Management", description: "Secure and optimize your databases." },
  { icon: <FaShieldAlt />, title: "Cyber Security", description: "Protect your systems from threats." },
  { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Build seamless mobile experiences." },
  { icon: <FaMoneyCheckAlt />, title: "Financial Solutions", description: "Smart tools for finance and banking." },
  { icon: <FaCog />, title: "System Integration", description: "Connect and optimize your workflows." },
  { icon: <FaBullseye />, title: "Business Intelligence", description: "Make data-driven decisions with AI." },
  { icon: <FaCloud />, title: "Cloud Solutions", description: "Scalable cloud computing services." },
  { icon: <FaProjectDiagram />, title: "Project Management", description: "Streamline operations efficiently." },
];

const DFGServices = () => {
  return (
    <div className="services-section">
      <Typography variant="h2" className="services-title">
        Our Services
      </Typography>
      <Grid container spacing={3} className="services-container">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Paper className="service-card" elevation={3}>
              <div className="service-icon-wrapper">{service.icon}</div>
              <Typography variant="h5" className="service-title-text">
                {service.title}
              </Typography>
              <Typography variant="body1" className="service-description">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DFGServices;
