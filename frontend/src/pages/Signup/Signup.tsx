import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// @ts-ignore ts(2307)
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const customTheme = {
  name: "custom-theme",
  tokens: {
    components: {
      tabs: {
        item: {
          color: { value: "#1e1e23" },
          _active: {
            borderColor: { value: "#32cd32" },
            color: { value: "#32cd32" },
          },
          _hover: {
            color: { value: "#32cd32" },
          },
        },
      },
      button: {
        primary: {
          backgroundColor: { value: "#fa8072" },
          _hover: {
            backgroundColor: { value: "#ff5252" },
          },
        },
      },
    },
  },
};

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <ThemeProvider theme={customTheme}>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              {/* @ts-ignore ts(18048) */}
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
