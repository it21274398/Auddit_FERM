import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  Assessment,
  Calculate,
  AccountBalance,
  BusinessCenter,
  ArrowForward,
  CheckCircle,
  PlayArrow,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Audit & Assurance",
      desc: "Independent audit services designed to ensure financial accuracy, regulatory compliance, and stakeholder confidence.",
      icon: <Assessment sx={{ fontSize: 40 }} />,
      features: [
        "Financial Statement Audits",
        "Internal Control Evaluation",
        "Compliance Auditing",
        "Risk Assessment",
      ],
      color: "#4CD964",
      gradient: "linear-gradient(135deg, #4CD964 0%, #2ECC71 100%)",
      delay: 0.1,
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Comprehensive accounting and bookkeeping solutions that support informed decision-making and financial transparency.",
      icon: <Calculate sx={{ fontSize: 40 }} />,
      features: [
        "Real-time Financial Reporting",
        "Payroll Processing",
        "Accounts Management",
        "Financial Analysis",
      ],
      color: "#4A90E2",
      gradient: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
      delay: 0.2,
    },
    {
      title: "Tax & Compliance",
      desc: "Professional tax planning, filings, and statutory compliance services aligned with local and international regulations.",
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      features: [
        "Tax Planning & Strategy",
        "Corporate Tax Filing",
        "VAT/GST Compliance",
        "Tax Advisory Services",
      ],
      color: "#9B59B6",
      gradient: "linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)",
      delay: 0.3,
    },
    {
      title: "Business & IT Consulting",
      desc: "Advisory and technology-driven solutions to improve operational efficiency, digital transformation, and business performance.",
      icon: <BusinessCenter sx={{ fontSize: 40 }} />,
      features: [
        "Digital Transformation",
        "ERP Implementation",
        "Process Optimization",
        "IT Security Audits",
      ],
      color: "#E74C3C",
      gradient: "linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)",
      delay: 0.4,
    },
  ];

  const stats = [
    { value: "99.8%", label: "Audit Accuracy", subtitle: "Industry Leading" },
    { value: "500+", label: "Happy Clients", subtitle: "Since year" },
    { value: "15+", label: "Years Experience", subtitle: "Proven Track Record" },
    { value: "24/7", label: "Client Support", subtitle: "Always Available" },
  ];

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
         py: { xs: 5, md: 10 },
        background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",

        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "300px",
          
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
        }}
      />

      <Container maxWidth="lg">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={{ xs: 6, md: 10 }}>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.25rem" },
                mb: 3,
                background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Comprehensive Financial & Business Solutions
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              We deliver end-to-end professional services that empower businesses with
              accuracy, compliance, and strategic growth opportunities.
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid - SIMPLE VERSION */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr'
          },
          gap: 4,
          mb: 10
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(114, 114, 114, 0.49)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                }
              }}>
                {/* Top color bar */}
                <Box sx={{
                  height: '6px',
                  background: service.gradient
                }} />

                <CardContent sx={{
                  p: 4,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Icon and Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                    <Box sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: `${service.color}15`,
                      color: service.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={800} color={service.color}>
                      {service.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {service.desc}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <CheckCircle sx={{ color: service.color, fontSize: 18 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>


                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>


      </Container>
    </Box>
  );
};

export default ServicesSection;