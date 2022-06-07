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
  "California Peace and Freedom Party",
  "Green Party of Alameda County",
  "Green Party of Fresno County",
  "Green Party of San Diego County",
  "Green Party of San Francisco County",
  "Jason Boxer, Trustee Manhattan Beach Unified School District",
  "Labor Council for Latin American Advancement - Sacramento AFL-CIO Chapter",
  "San Diego La Raza Lawyers Association",
  "Teri L. Chavez, Trustee San Bruno Park School District",
  "Oscar Caralampio, Trustee Fallbrook Union High School District",
  "Black is Back Coalition",
  "Green Party of California",
  "Peace and Freedom Party of California",
  "Mike Hutchinson, Trustee Oakland Unified School District",
  "San Diego Union Tribune",
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
        <Box display="flex" flexDirection="column" alignItems="left">
          <ul style={{ listStyle: "none" }}>
            {endorsements.sort().map((endorsement) => (
              <li
                key={endorsement}
                style={{ marginBottom: "12px", fontSize: "16px" }}
              >
                {endorsement}
              </li>
            ))}
          </ul>
          <Typography
            sx={{ fontSize: "16px", marginTop: "12px", textAlign: "center" }}
          >
            More endorsements to come! Stay Tuned!{" "}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Endorsements;
