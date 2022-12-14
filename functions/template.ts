export function getTemplate({ withError }: { withError: boolean }): string {
  return `
  <!doctype html>
  <html lang="en" data-theme="light">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title></title>
      <meta name="description" content="MNC Admin Access Only">
      <link rel="shortcut icon" href="https://picocss.com/favicon.ico">

      <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">

      <style>
        body > main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(100vh - 7rem);
          padding: 1rem 0;
          max-width: 600px;
        }
        html {
            background-color: #2D2424;
        }

        .error {
          background: red;
          border-radius: 10px;
          color: white;
          padding: 0.5em 1em;
        }
        h1, h2, p {
            text-align: center;
        }
        h2 { color: #2D2424; }
        
        article {
            margin: 1.5rem;
            border-radius: .5rem;
        }
      </style>
    </head>

    <body>
      <main>
        <article>
          <hgroup>
            <h1>Password</h1>
            <h2>Please enter your password for this site.</h2>
          </hgroup>
          ${withError ? `<p class="error">You're not Raymund, please try again.</p>` : ''}
          <form method="post" action="/cfp_login">
            <input type="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required autofocus>
            <button type="submit" class="contrast">Login</button>
          </form>
        </article>
      </main>
    </body>

  </html>
  `;
}
