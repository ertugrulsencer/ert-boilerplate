module.exports = (err, req, res, next) => {
  if (err) {
    console.error("Error:", err);
    res.send(`
      <style>
      .container{
        width: 90%;
        margin: 0 auto;
      }
      h1 {
        font-family: monospace;
        text-align: center;
      }
      </style>
      <h1 style="text-align: center;color: #c00; margin: 1rem 0;">Uups, hata var erto;</h1>
      <div class="container">
        <pre style="padding: 1rem 0;border-radius: 0.5rem;background: #e8e8e8;box-shadow: 2px 4px 18px -2px rgba(0, 0, 0, 0.1)">
          ${err}
        </pre>
      </div>
    `);
  }
};
