export const NotifyAdminEmail = ({ firstName }) => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <h2>Hey there!</h2>
    <p>
      A new applicant named {firstName} has applied to join the chain. Please
      review the details <a href="https://admin-the-chain.vercel.app/">here.</a>
    </p>
  </div>
)
