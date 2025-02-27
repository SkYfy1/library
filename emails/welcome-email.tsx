import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  render,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  userFirstname: string;
}

const WelcomeEmail = ({ userFirstname }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Container style={container}>
        <Heading style={{ textAlign: "center", fontSize: "25px" }}>
          Welcome
        </Heading>
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
          zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
          bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak
          met letters nam en ze door elkaar husselde om een font-catalogus te
          maken.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="library-lime-one.vercel.app">
            Check Books
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Shurik Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

export const emailHTML = async () => {
  const email = await render(<WelcomeEmail userFirstname="user" />);
  return email;
};

WelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as WelcomeEmailProps;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
