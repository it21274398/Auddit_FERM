import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  AvatarGroup
} from "@mui/material";
import { 

  Visibility,
  Handshake,
  TrendingUp,
  People,
  LocationOn,
  CalendarToday,
  ArrowForward,
  CheckCircle
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { TrackChanges } from "@mui/icons-material";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
       background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(76, 217, 100, 0.05) 0%, rgba(76, 217, 100, 0) 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(74, 144, 226, 0.03) 0%, rgba(74, 144, 226, 0) 70%)",
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
              Building Trust Through Excellence Since year
            </Typography>
            
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.7,
                fontSize: "1.1rem",
              }}
            >
              SML Business Solutions is a leading professional services firm providing comprehensive 
              audit, accounting, taxation, and strategic business advisory services to organizations 
              across Sri Lanka and beyond.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.05)",
                  backgroundColor: "white",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05)",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Stack spacing={4}>
                    {/* Mission */}
                    <Box>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: "rgba(76, 217, 100, 0.1)",
                            color: "primary.main",
                          }}
                        >
                          <TrackChanges sx={{ fontSize: 30 }} />
                        </Box>
                        <Typography variant="h4" fontWeight={700} color="primary.main">
                          Our Mission
                        </Typography>
                      </Box>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem", lineHeight: 1.8, pl: 7 }}
                      >
                        To deliver accurate, reliable, and compliant business solutions that 
                        empower our clients to achieve sustainable growth, operational excellence, 
                        and long-term financial confidence.
                      </Typography>
                    </Box>

                    {/* Vision */}
                    <Box>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: "rgba(74, 144, 226, 0.1)",
                            color: "secondary.main",
                          }}
                        >
                          <Visibility sx={{ fontSize: 30 }} />
                        </Box>
                        <Typography variant="h4" fontWeight={700} color="secondary.main">
                          Our Vision
                        </Typography>
                      </Box>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem", lineHeight: 1.8, pl: 7 }}
                      >
                        To be the most trusted professional services partner in the region, 
                        recognized for unwavering integrity, innovative solutions, and 
                        transformative client relationships that drive lasting success.
                      </Typography>
                    </Box>

                    {/* Values */}
                    <Box>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: "rgba(155, 89, 182, 0.1)",
                            color: "#9B59B6",
                          }}
                        >
                          <Handshake sx={{ fontSize: 30 }} />
                        </Box>
                        <Typography variant="h4" fontWeight={700} color="#9B59B6">
                          Our Values
                        </Typography>
                      </Box>
                      <Stack spacing={2} pl={7}>
                        {[
                          "Integrity & Transparency in All Engagements",
                          "Excellence & Precision in Every Service",
                          "Client-Centric & Solution-Oriented Approach",
                          "Innovation & Continuous Improvement"
                        ].map((value, idx) => (
                          <Box key={idx} display="flex" alignItems="center" gap={2}>
                            <CheckCircle sx={{ color: "#9B59B6", fontSize: 20 }} />
                            <Typography variant="body1" color="text.primary">
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ pl: { xs: 0, md: 4 } }}>
                {/* Stats Cards */}
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                  gap: 3, 
                  mb: 5 
                }}>
                  {[
                    { icon: <CalendarToday />, value: "15+", label: "Years Experience", color: "#4CD964" },
                    { icon: <People />, value: "50+", label: "Expert Team Members", color: "#4A90E2" },
                    { icon: <TrendingUp />, value: "180+", label: "Happy Clients", color: "#9B59B6" },
                    { icon: <LocationOn />, value: "20+", label: "Cities Served", color: "#E74C3C" },
                  ].map((stat, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.05)",
                        backgroundColor: "white",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
                        },
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: `${stat.color}15`,
                            color: stat.color,
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Box>
                          <Typography variant="h3" fontWeight={800} color={stat.color}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  ))}
                </Box>

                {/* Team Preview */}
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.05)",
                    backgroundColor: "white",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography variant="h5" fontWeight={700} mb={3}>
                    Meet Our Expert Team
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <AvatarGroup max={6}>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <Avatar
                          key={num}
                          alt={`Team Member ${num}`}
                          src={`/team/team${num}.jpg`}
                          sx={{ width: 50, height: 50, border: "3px solid white" }}
                        />
                      ))}
                    </AvatarGroup>
                    <Box>
                      <Typography variant="body1" fontWeight={600}>
                        50+ Certified Professionals
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ACCA, CA, CPA, MBA Qualified
                      </Typography>
                    </Box>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    Our diverse team of experts combines decades of industry experience 
                    with cutting-edge knowledge to deliver exceptional results for our clients.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<ArrowForward />}
                    sx={{
                      borderRadius: 3,
                      fontWeight: 600,
                      borderWidth: 2,
                    }}
                    onClick={() =>
                      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Full Team
                  </Button>
                </Card>

                {/* Certifications */}
                <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                  
                  <Chip
                    label="ICASL Registered"
                    sx={{
                      backgroundColor: "rgba(74, 144, 226, 0.1)",
                      color: "secondary.main",
                      fontWeight: 600,
                      px: 2,
                    }}
                  />
                  <Chip
                    label="GDPR Compliant"
                    sx={{
                      backgroundColor: "rgba(155, 89, 182, 0.1)",
                      color: "#9B59B6",
                      fontWeight: 600,
                      px: 2,
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default AboutSection;