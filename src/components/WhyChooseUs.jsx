import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardContent,
  Button,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  Groups, 
  VerifiedUser, 
  Security, 
  SupportAgent,
  ArrowForward,
  CheckCircle,
  TrendingUp,
  Speed
} from "@mui/icons-material";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const points = [
    {
      title: "Experienced Professionals",
      desc: "Our team consists of qualified professionals with practical experience in audit, accounting, taxation, and IT advisory services.",
      icon: <Groups sx={{ fontSize: 40 }} />,
      color: "#4CD964",
      stats: "15+ Years Avg. Experience",
      features: ["Certified Experts", "Industry Specialists", "Continuous Training"],
      delay: 0.1,
    },
    {
      title: "Accuracy & Compliance",
      desc: "We follow established standards and regulatory requirements to ensure accuracy, transparency, and full compliance.",
      icon: <VerifiedUser sx={{ fontSize: 40 }} />,
      color: "#4A90E2",
      stats: "99.8% Accuracy Rate",
      features: ["ISO Certified", "Regular Audits", "Quality Checks"],
      delay: 0.2,
    },
    {
      title: "Confidential & Reliable",
      desc: "Client confidentiality and data security are treated with the highest level of importance in all our engagements.",
      icon: <Security sx={{ fontSize: 40 }} />,
      color: "#9B59B6",
      stats: "Zero Data Breaches",
      features: ["NDA Protected", "Secure Systems", "Encrypted Data"],
      delay: 0.3,
    },
    {
      title: "Client-Focused Approach",
      desc: "We work closely with our clients to understand their business needs and provide tailored, practical solutions.",
      icon: <SupportAgent sx={{ fontSize: 40 }} />,
      color: "#E74C3C",
      stats: "98% Client Retention",
      features: ["Dedicated Teams", "Regular Updates", "Flexible Solutions"],
      delay: 0.4,
    },
    {
      title: "Technology-Driven Solutions",
      desc: "Leveraging cutting-edge technology and software to deliver efficient, accurate, and real-time financial insights.",
      icon: <Speed sx={{ fontSize: 40 }} />,
      color: "#3498DB",
      stats: "Real-time Reporting",
      features: ["Cloud-Based Tools", "Automated Processes", "AI-Powered Analytics"],
      delay: 0.5,
    },
    {
      title: "Strategic Growth Partnership",
      desc: "We don't just handle your finances—we become strategic partners in your business growth and success journey.",
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: "#2ECC71",
      stats: "30% Avg. Client Growth",
      features: ["Business Advisory", "Growth Planning", "Market Insights"],
      delay: 0.6,
    },
  ];

  return (
    <Box
      id="why-us"
      sx={{
        position: "relative",
        py: { xs: 5, md: 10 },
       background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `radial-gradient(${theme.palette.primary.main}10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      {/* Floating Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          left: "10%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(76, 217, 100, 0.08) 0%, rgba(76, 217, 100, 0) 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          right: "10%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, rgba(74, 144, 226, 0) 70%)",
          borderRadius: "50%",
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
                lineHeight: 1.2,
              }}
            >
              Why Choose SML Business Solutions
            </Typography>
            
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              We are committed to delivering professional, reliable, and compliant 
              business solutions that support long-term success and build lasting 
              partnerships based on trust and excellence.
            </Typography>
          </Box>
        </motion.div>

        {/* Points Grid - CSS Grid Version */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr 1fr',
            lg: '1fr 1fr 1fr'
          }, 
          gap: 4, 
          mb: 10 
        }}>
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: point.delay }}
            >
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }
              }}>
                {/* Top color bar */}
                <Box sx={{ 
                  height: '6px', 
                  background: point.color 
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
                      bgcolor: `${point.color}15`,
                      color: point.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      }
                    }}>
                      {point.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={800} color={point.color}>
                      {point.title}
                    </Typography>
                  </Box>

                  {/* Stats Badge */}
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        backgroundColor: `${point.color}10`,
                        color: point.color,
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        px: 2,
                        py: 0.75,
                        borderRadius: 2,
                        border: `1px solid ${point.color}30`,
                      }}
                    >
                      {point.stats}
                    </Box>
                  </Box>
                  
                  {/* Description */}
                  <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                    {point.desc}
                  </Typography>
                  
                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    {point.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <CheckCircle sx={{ color: point.color, fontSize: 18 }} />
                        <Typography variant="body2" color="text.primary" fontWeight={500}>
                          {feature}
                        </Typography>
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

export default WhyChooseUs;