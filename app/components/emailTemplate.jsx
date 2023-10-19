export const EmailTemplate = ({ firstName }) => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <h2>Hi 👋, {firstName}!</h2>
    <p>
      Thank you for applying to be part of The Chain Miami. Your application is
      under review.🎉
    </p>
    <p>
      All applications are reviewed to ensure that we maintain a community of
      vetted members who are a right fit. We will be notifying you by the end of
      October with an update on your application status.
    </p>
    <p>
      In the meantime, join our{' '}
      <a href="https://bit.ly/m/thechain_miami">texting community</a> or follow
      us on <a href="https://bit.ly/m/thechain_miami">social</a> to
      stay-up-to-date on upcoming events and more.
    </p>
    <p>
      If you have any questions, respond to this email and I'll get back to you.
    </p>
    <p>- The Chain Miami team</p>
  </div>
)
