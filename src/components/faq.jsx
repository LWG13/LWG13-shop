import "./faq.scss"
import faqicon from "../../faqicon.png"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Footer from "./footer.jsx"
import { Grid } from "@mui/material"
export default function Faq() {
  return(
    <div className="faq">
      <div className="faq-box">
        <Grid container >
         <Grid item xs={12} sm={6} md={6} lg={6} >
          <h1 style={{fontSize: "80px"}}>FAQ</h1>
          <p>Have question? here you'll find answer which you need the most in here!</p>
         </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
           <img src={faqicon} alt="faq" />
           </Grid>
        </Grid>
      </div>
      <div className="faq-qa" >
       <h1>About Us</h1>
       <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
  <AccordionSummary
    expandIcon={"^"}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    What are some of the main differences between ecommerce and the more traditional commerce?
  </AccordionSummary>
  <AccordionDetails>
    Answer: Traditional commerce refers to sales made physically at a specific location, such as a store or a market. On the other hand, e-commerce involves buying and selling goods and services over the Internet. Ecommerce doesn't require a physical location and can be accessed from anywhere in the world.
  </AccordionDetails>
</Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
        <Accordion slotProps={{ transition: { unmountOnExit: true }, heading: { component: 'h4' } }}>
          <AccordionSummary
            expandIcon={"^"}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What would you say are some technologies that have streamlined the ecommerce experience?
          </AccordionSummary>
          <AccordionDetails>
            Answer: Several technologies have significantly streamlined the ecommerce experience, making it more efficient, personalized, and user-friendly for both businesses and consumers. technologies not only enhance operational efficiency but also improve customer satisfaction and engagement, driving growth for ecommerce businesses.
          </AccordionDetails>
        </Accordion>
      </div>
      <br/><br/>
      <Footer />
    </div>
  )
}