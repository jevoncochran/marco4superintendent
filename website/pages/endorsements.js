import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const endorsements = [
  "Anita Revilla Tijerina, Department Chair Chicana(o) and Latina(o) Studies at Cal State Los Angeles",
  "Association of Raza Educators - Los Angeles",
  "Association of Raza Educators - San Diego",
  "Caitlin Quinn, Trustee Petaluma City Schools",
  'Carolina "Caro" Juaregui, Trustee Whittier City School District',
  "Carlos Munoz Jr., Professor Emeritus at University of California, Berkeley",
  "Estefany Castaneda, Trustee Centinela Valley Union High School District",
  "Isidro Ortiz, Ph.D., San Diego State University",
  "Jen Abreu, President/CEO of Redemption Row California",
  "Jennifer M. Blanco, Trustee San Bruno Park School District",
  "Jorge Pacheco Jr., Trustee Oak Grove School District",
  "Labor and Community for an Independent Party",
  "Lupe Gallegos-Diaz, Director Chicanx Latinx Student Development Center at University of California, Berkeley",
  "Tasha Williamson, San Diego Community Organizer",
];

const Endorsements = () => {
  return (
    <Layout>
      <Box>
        <Typography
          sx={{
            fontSize: "32px",
            color: "#8C2723",
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          LIST OF ENDORSEMENTS
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          // border: "1px dashed black",
          padding: "24px",
        }}
      >
        {endorsements.map((endorsement) => (
          <li
            key={endorsement}
            style={{ marginBottom: "12px", fontSize: "16px" }}
          >
            {endorsement}
          </li>
        ))}
        <Typography sx={{ fontSize: "16px", marginTop: "12px" }}>
          More endorsements to come! Stay Tuned!{" "}
        </Typography>
      </Box>
    </Layout>
  );
};

export default Endorsements;
