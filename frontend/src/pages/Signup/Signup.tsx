import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// @ts-ignore ts(2307)
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* @ts-ignore ts(18048) */}
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default SignUp;
