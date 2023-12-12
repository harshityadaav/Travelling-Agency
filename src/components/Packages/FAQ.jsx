import "../../Style/Packages/faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function FAQ() {
  return (
    <div className="faq">
      <Accordion>
        <div className="faq-question">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <b className="faq-text">Who is Lorem Ipsum ?</b>
            </Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="faq-question">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <b className="faq-text">Who is Lorem Ipsum ?</b>
            </Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="faq-question">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <b className="faq-text">Who is Lorem Ipsum ?</b>
            </Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
