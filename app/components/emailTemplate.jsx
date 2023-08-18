export const EmailTemplate = ({ firstName }) => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <h2 style={{ color: '#ff62c7' }}>Hi, {firstName}!</h2>
    <p>Your member request for The Chain Miami has been approved. </p>
    <p>
      We’re excited for you to join a community of Miami-based web3 web3
      entrepreneurs, investors, builders, and frens who are connecting through
      monthly dinners, community events, and more.
    </p>
    <p style={{ fontWeight: 'bold' }}> 3 Things to Know to Get Started: </p>
    <ol>
      <li>
        Text “CHAINVIP” to 305-871-9262 be added to our members-only texting
        community where we’ll share perks and announcements just for our
        members.
      </li>
      <li>
        RSVP for our next Dinner Club{' '}
        <a href='https://www.thechain.miami/'>here</a>. We host these the first
        Tuesday of every month. We will be limiting it to 20 people next month.
      </li>
      <li>
        Stay tuned, we are building. The Chain Miami will be launching a few key
        community features very soon. It will include:
        <ul>
          <li>
            Members Database: Discover and connect with Miami's web3
            trailblazers in an instant.
          </li>
          <li>
            Rewards System & Leaders Board: Elevate your engagement and reap
            rewards while securing your spot on the illustrious Leaders Board.
          </li>
          <li>
            Members-Only Group Chat: Soon, indulge in exclusive conversations
            with fellow visionaries in our private group chat.
          </li>
        </ul>
      </li>
    </ol>
    <p>
      Make sure to follow us on{' '}
      <a href='https://twitter.com/thechain_miami'>Twitter</a> and{' '}
      <a href='https://www.instagram.com/thechain_miami/'>Instagram</a> if you
      haven’t already and please don’t hesitate to hit reply with any questions.
    </p>
    <p>- Anna and Monica</p>
  </div>
);
