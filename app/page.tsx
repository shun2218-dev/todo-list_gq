import { getSession } from "@auth0/nextjs-auth0";
import { LinkButtonContainer } from "@components/LinkButton/LinkButtonContainer";
import styles from "./page.module.scss";
export default async function Home() {
  const session = await getSession();
  return (
    <main>
      <h1>Todo App</h1>
      <div className={styles["container"]}>
        <LinkButtonContainer href={"/register"} linkText="Sign Up" size="sm" />
        <LinkButtonContainer
          href={"/login"}
          linkText="Sign In"
          variant="outlined"
          size="sm"
        />
        {session ? (
          <div style={{ width: "100%" }}>
            <a href="/api/auth/logout">Logout</a>
            <div>email: {session.user.email}</div>
            <div>accessToken: {session.accessToken}</div>
            <div>accessTokenExpiresAt: {session.accessTokenExpiresAt}</div>
            <div>refreshToken: {session.refreshToken}</div>
          </div>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </main>
  );
}
