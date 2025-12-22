import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
  alpha,
  Divider,
} from "@mui/material";
import { LinkedIn, Twitter, Email, ArrowForward, Star, Verified, Business, School, Work } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hoveredMember, setHoveredMember] = useState(null);

  const team = [
    {
      name: "Sarah Chen",
      role: "Audit & Compliance Director",
      qualification: "ACCA, CPA",
      experience: "15+ years",
      expertise: ["Financial Audits", "Risk Management", "Digital Auditing"],
      image: "/team/manager1.jpg",
      level: "manager",
      linkedin: "#",
      email: "sarah@smlbusiness.com",
      achievements: ["Led 200+ compliance audits", "Digital transformation pioneer"],
      education: "MBA, Harvard Business School",
    },
    {
      name: "Robert Johnson",
      role: "Managing Director & CEO",
      qualification: "CA, MBA (Harvard)",
      experience: "20+ years",
      expertise: ["Strategic Planning", "M&A Advisory", "Corporate Finance"],
      image: "/team/boss.jpg",
      level: "boss",
      linkedin: "#",
      email: "robert@smlbusiness.com",
      achievements: ["Forbes 30 Under 30", "Built $500M portfolio"],
      education: "Harvard MBA, Stanford BS",
    },
    {
      name: "Michael Rodriguez",
      role: "IT & Digital Transformation Lead",
      qualification: "BSc (Software Eng), PMP",
      experience: "12+ years",
      expertise: ["Digital Auditing", "System Integration", "Data Analytics"],
      image: "/team/manager2.jpg",
      level: "manager",
      linkedin: "#",
      email: "michael@smlbusiness.com",
      achievements: ["Patent holder", "AI implementation expert"],
      education: "MIT Computer Science",
    },
  ];

  return (
    <Box
      id="team"
      sx={{
        position: "relative",
        py: { xs: 5, md: 10 },
          background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
        }
      }}
    >
      {/* Elegant Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, ${theme.palette.primary.main} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main} 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle Grid Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />

      <Container maxWidth="xl">
        {/* Section Header with Sophisticated Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box
            textAlign="center"
            mb={10}
            sx={{
              position: "relative",
              '&::after': {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 3,
                background: "linear-gradient(90deg, transparent, #4CAF50, transparent)",
                borderRadius: 2,
              }
            }}
          >


            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                mb: 3,
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: theme.palette.text.primary,
                lineHeight: 1.1,
              }}
            >
              Meet Our{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  '&::after': {
                    content: '""',
                    position: "absolute",
                    bottom: 2,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    opacity: 0.3,
                  }
                }}
              >
                Leadership
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.palette.text.secondary,
                fontSize: "1.1rem",
                letterSpacing: "0.2px",
              }}
            >
              Our executive leadership combines decades of industry expertise with innovative vision
              to deliver exceptional financial solutions and strategic guidance for your success.
            </Typography>
          </Box>
        </motion.div>

        {/* Team Grid with Enhanced Layout */}
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ position: "relative", zIndex: 1 }}
        >
          {team.map((member, index) => {
            const isBoss = member.level === "boss";

            return (
              <Grid item xs={12} md={4} key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    elevation={hoveredMember === index ? 8 : 0}
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "visible",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      backgroundColor: "white",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      '&:hover': {
                        transform: "translateY(-8px)",
                        boxShadow: `0 32px 64px ${alpha(theme.palette.primary.main, 0.15)}`,
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                      },
                      ...(isBoss && {
                        borderTop: `4px solid ${theme.palette.primary.main}`,
                        '&::before': {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "100%",
                          background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.03)}, transparent 30%)`,
                          borderRadius: "inherit",
                        }
                      }),
                    }}
                  >
                    {/* CEO Badge with Elegant Design */}
                    {isBoss && (
                      <Box
                        component={motion.div}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        sx={{
                          position: "absolute",
                          top: -12,
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: "white",
                          px: 3,
                          py: 1,
                          borderRadius: 20,
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "1px",
                          zIndex: 2,
                          boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Star sx={{ fontSize: 14 }} />
                        CEO & FOUNDER
                      </Box>
                    )}

                    {/* Avatar with Professional Frame */}
                    <Box
                      sx={{
                        position: "relative",
                        mt: isBoss ? 6 : 5,
                        mb: 3,
                        px: 3,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: isBoss ? 140 : 120,
                          height: isBoss ? 140 : 120,
                          mx: "auto",
                          '&::before': {
                            content: '""',
                            position: "absolute",
                            top: -6,
                            left: -6,
                            right: -6,
                            bottom: -6,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            opacity: 0.1,
                            transition: "all 0.3s ease",
                          },
                          '&:hover::before': {
                            opacity: 0.2,
                            transform: "scale(1.05)",
                          }
                        }}
                      >
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            border: "4px solid white",
                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s ease",
                            transform: hoveredMember === index ? "scale(1.02)" : "scale(1)",
                          }}
                        />
                      </Box>

                      {/* Experience Badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: "calc(50% - 60px)",
                          backgroundColor: theme.palette.grey[900],
                          color: "white",
                          px: 2,
                          py: 0.75,
                          borderRadius: 2,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <Work sx={{ fontSize: 12 }} />
                        {member.experience}
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 4, pt: 2 }}>
                      {/* Name with Verified Badge */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          textAlign="center"
                          sx={{
                            color: theme.palette.grey[900],
                            fontSize: isBoss ? "1.5rem" : "1.375rem",
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Verified
                          sx={{
                            fontSize: 20,
                            color: theme.palette.primary.main,
                          }}
                        />
                      </Box>

                      {/* Role */}
                      <Typography
                        variant="subtitle1"
                        color="secondary.main"
                        textAlign="center"
                        fontWeight={600}
                        sx={{
                          mb: 2,
                          fontSize: "0.95rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {member.role}
                      </Typography>

                      {/* Qualification */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 3 }}>
                        <School sx={{ fontSize: 16, color: theme.palette.text.secondary, opacity: 0.7 }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontWeight={500}
                          sx={{ fontSize: "0.875rem" }}
                        >
                          {member.qualification}
                        </Typography>
                      </Box>

                      <Divider sx={{ my: 3, opacity: 0.3 }} />

                      {/* Expertise Section */}
                      <Box sx={{}}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                          sx={{
                            display: "block",
                            mb: 2,
                            textAlign: "center",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            fontSize: "0.7rem",
                          }}
                        >
                          Core Expertise
                        </Typography>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          flexWrap="wrap"
                          gap={1}
                          sx={{ minHeight: 72 }}
                        >
                          {member.expertise.map((skill, idx) => (
                            <Chip
                              key={idx}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                color: theme.palette.primary.dark,
                                fontWeight: 500,
                                fontSize: "0.7rem",
                                height: 28,
                                '&:hover': {
                                  backgroundColor: alpha(theme.palette.primary.main, 0.12),
                                }
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>


                      {/* Social Links with Hover Effects */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 1,
                          mt: "auto",
                          pt: 3,
                          borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        }}
                      >
                        <IconButton
                          size="medium"
                          sx={{
                            border: `1px solid ${alpha("#0077B5", 0.2)}`,
                            backgroundColor: alpha("#0077B5", 0.05),
                            color: "#0077B5",
                            transition: "all 0.3s ease",
                            '&:hover': {
                              backgroundColor: alpha("#0077B5", 0.15),
                              transform: "translateY(-2px)",
                              boxShadow: `0 4px 12px ${alpha("#0077B5", 0.2)}`,
                            },
                          }}
                        >
                          <LinkedIn fontSize="medium" />
                        </IconButton>
                        <IconButton
                          size="medium"
                          sx={{
                            border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                            backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                            color: theme.palette.secondary.main,
                            transition: "all 0.3s ease",
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.secondary.main, 0.15),
                              transform: "translateY(-2px)",
                              boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.2)}`,
                            },
                          }}
                        >
                          <Email fontSize="medium" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

    
      </Container>
    </Box>
  );
};

export default TeamSection;