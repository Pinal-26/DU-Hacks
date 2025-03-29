// Home.js
import React, { useState } from "react";

export default function Home({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin(username); // Pass the username to App
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      const errorWindow = window.open("", "_blank", "width=700,height=400");
      errorWindow.document.write(`
        <div style='text-align:center; font-size:16px; padding:20px; background:#bbdefb; border:1px solid red; border-radius:10px;'>
          <p>Please enter both username and password</p>
          <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUPEBEQFRAVGBYXFxcSFQ8SDxAVFRcYFhUSFhcYHSggGB4xHhYTIzEkJyk3LjIwFx8zODMvNyguOisBCgoKDg0OGhAQGy4lICY3LS8tMi01Ky0tLS0vLS0tLS0tLS0tLystLS8tLS0vLS0rKy0tKy0rLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQHAgj/xAA/EAACAgIABAMFBQYEBAcAAAABAgADBBEFEiExBhNBIlFhcYEHFCMykUJSYqGx0YLB4fFyc5LCFSQlM0NEU//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgICAgMBAAAAAAAAAAABAhEDIRIxBEETIjJR/9oADAMBAAIRAxEAPwD2aIicTciIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJhmABJIAHUk9AAO5MDMQDvqO0QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBKLwfhtl78Uw7svKsUAUKbWVwi3VB+fkAA5vaI6a6CXqV3gvA8inMycp8ipqshuY1rUVZSgCVHmLHsg0enU9ekJitcbty8TPqTFeyyvHwa2aj2iMmuu3yrNIOgs5WVgQN+zrr2Pb4PycsZ9qZrNz5OOmStZLcmMBY1YpUHsQrJvXr33rcs78HBzVzuc8y0NRyaGiGdX5t/4da+MxkcI5s2rND68uqypl5d84dlYHe+mip9PWNJ39K/47pY3UPcuW/DgtnmDENgdLSRyWWCs8xQDfbsf58rZdn3XCxsXPexMq9qxla/HShQz+Xs/wDyALy8xG+h6CWXjvDMix67sTKNNlYYFXU2Y9yvr86bHUFRpvn75HU+DF+5/dnubz/ObJF9ahGryGYtz1r2A6617ie3oN9I/jXDn4YqZtGXmWItlSXVZNzXpbXY4rJXm/K4LAgiRXFrKfvfEnyM/IosqavyBXkPWx/AVtLVv2xza6Aessi+F8m56/v+d59NTK4qrpShbXTqrWkE8wB68o0JjL8F13WZz3Cpjlchqfk3djFagnMGP8Shuh9OsJliAe6y/IxUzszIxf8A09brDXd91/G8wAlgfZ3onYI9PhN+JxbM+4pnrbZcmNkXc3QBs7CVinmkaHtAe0P+EyZt8Ii3Jqty/JyK0xBQ/mKed7g6nzwOoXY5+u9jclfDvCnxsVcV7PM5OdVYjX4ZY+Wh+SlR9IRbEVwvxAcjIvyltC8Lx6yvMQAt9ug9lvMRsKq9PmT39JLh3inDvr82u9eTnWv2w9Z57NeWunAPXY175p8J8D8nh1WDkpWxFZW1ej1tzFiwP73ebbfCmG2QuWaR5ylCPacV81Y5a3NYPKWAAAOumhCOk1ERCCIiAiIgIiICIiAiIgIiICIiAiJ8WPqEvvcbnG1kwtkja/467Ymmu33zz77QOKWPmLhLdbVRXT51hqYo7ksQAWHXQA39T8JM79KWa9vR4ni2C1g/ExOIZSuOunsNif4q36EfMSzcI+0J6+VeI1DkOtZOPtqTvsXTuvzH6S2WNx9omr6ehxIZPFmAToZuLv8A5tY/qZKY+Slg5q3R196MrD9RKpbYiIQREQEREBERAREQEREBERAREQEREBERAGcdrTrftOF5FaccamMwDMmV3xX4lGNy01KLMuwewn7KD/8AR/cvQ/PR9xlXR1IleL8eoxE8zIsC7/Ko62Ofcqjqf6e+efZ+W+blnL8hqaTT5JFjDzXXZYPyj8p6/oPWMbAJf7xkObsk93bqqfw1jso+n6SQUEnQBJPoOpP0nTx8Wu65OTll6iLx+CopDczkg7HUD+kluF8KFjeTWgCttmGvYA/bYjsB8Pf85L8N8M32kFl8tPe49r6L3/XUunDuE10VmusdSPaY/mY/H+02rCKKOCYugPu2Poe+qsn9dTpxMOuo7qRUP8Hs/wBJ0FdHR7jp+kxPE3Xu6jm4hxLiSsPu1mO6nexkKR5fuIKaJkWLM6yzy7OMAWdT5VFdCsoGt6/a1vXcSdnBm4R0XpCo56tyhVaz5sOpPzlry5SKTgwuXpx2YGao5q+KZRtA2os5GrYjroqfSXDwbxg5mFTksAHYEPoaHOjFGIHoNqT9ZREv8lbcm3eqlJ9ruXPRV6+u+n1ly+zzhzY/DcetwQ5UuQe481jYAfowmnxuTLOW1j8ziw47JiscRE6XCREQEREBERAREQEREBERAREQE0Nj7M3z7STJLU+VnpC+IcmvEx7Mqw+zWu9duZuyoPiSQPrOHwF4fKVtm5ahszK9uzmG/KrOilAB7ADl2PgB+yJz+Mk+85uDw7vWztkXD0NdA9hWHqC2x+kvE2wwm9q55246cLcHxyd+RT/0L/adNGMidERFH8Kqv9JtibMSIiBW+PYJVvNUey3f+Fv9ZEy8OgIIIBB7g9jILO4Ee9R2P3T3HyP95wc/xrvyxeh8f5M145oSJttxnX8yMPmDr9Zq3OKyz27pZfSH8T8IOTUAjEW1nnrB0a2cdldT0I9Ovbfu3Ld4Q44M3FW7QW0bS1PWu1OjLr09CPgwkUo326/LrI/hQfC4ooZWWjPVhoggDIqGw3w2p18SfhN+C3enL8nGWb+1/ImJkmYnTXERESAiIgIiICIiAiIgIiICIiAmQZiIFV4IPN43mWn/AOvRRQvw8z8U6+ol1lN8B2rdkZ+bUreRdZWqOxGrfIUozKP3d9v95cp08f8ALPk9k035VaaDuiliAvMyqWJ6BRvufhM2XAes/PXizEdbb/MW228ZLhL3tL2LSoPJUyAdCQyMG6fASOTkmCcOPy9v0VEp/hjxK3/hePl5C2Ox2jEAFmKMyCxtkd+Tv7zJngvH68ksqLYpUAnmC60encEy8zlT+Dk8bnrqfaRy8pKlNljKiDQLMdKOYgDZ9OpE2qwI2DsHtrsfjPEvtV495mXdi2IzV0qi1adkRLWC2Pcyj/3DytygHt39Zw/Z1xniKXDGw2R0IZvKyGYUBV1zFW6mvuO3TZ6gzP8ANPLSfw3x298nwalPcD9BMUuSoLcobQ2FPMAfUA6Gx8dTZNfbH0wFA7CU37UF5acXIHQ05mO+/gSVI/mJc5TPtWO8Ouv1sycdB8y+/wDtlc/5q/H/AFFiS3r1m6cDPNlWQfXtOTGXXbpywvuOuIBiSyIiICIiAiIgIiICIiAiIgJryUJRlHcqQPmQdTYTPjzRI3InSu/ZPap4XSi9GrNiWL2ZLBYxYEeh9oH6iW9u0oXF+G34N1vEuH8jI4L5ONYwSuzl2TcjHojdyfqevY/WH4m4jxBQ/DsWqmjp+NmEnmP7QRE76PTfY/CdGHJNaUywtu1kyAdyKzfDGNkuLLqeZxoEq1iFwOyvyEcw+c57OGcbX2lzMCxv3LKGRPlzL1m/w/4oY3jBz6Pu2YQSnXmx8kDuan9/w/nI8Zb20uf69JPjVn3fHWnHwXvUjy0qpFSVIAPZDliAi+mwD8pCeDcu7GSvCzMLIS8nRvrRbse0nZDO9e+Q+h5hrp0PWXaaczKSqtrbWVK0BZmboqgdSTNdd7YzO+PiqHjDwP8Aema2qytDYVaxba/MRmReQWKQQyNyhVPXRCjpNXhzwymECQee5gAz8oRQo68iLs8o31PUk9NnoNfdPiDiOb7fD8aqnGP5b8wtzWj95Kl6ge4nvudFXDOKqwL34Vq+oNdlR+hX/OY3DG3eMa8eXj/SVxrTuTKnY3IJuJ41NtePkWLXkWDaq2+VzvWlcjROyOnfrJ0TXCaU5cpb0zKR4yb7xxHAwR15HbLs/hWoEV7+bcwli8R8fowqTfe2h2VRo2Wt6Ig9T/Iesq3hPFu8y3iOWNZWQR7GyRj0j8lI/kT8h67leXLrSeLC3tcPJGtanFYujqdS5KzmtbZ3MY34977deOek2TXjjpNkqyy9kREIIiICIiAiIgIiICIiBpuPXU+hUJ83L6zCWmZdeV2v9dKn4uVsnIx+EqWCXE25BU6YUVdeXfpzMNfQS841SoipWAEUBVC9FVQNKB8NalJvIp45RbZ0XIxbKEJ7eYlgs5fhsGcPEPC3FKaHwcK6p8RmDVM7vXlYunD+WG0Qy9NfX0nTw/rjvSmc3ZNvSZ5l9pnHK3XIqA5MnAbGuqsLDbWWMNooHX8pB+P0mzi3jPiuP5eNZw+hcm1hXW/nLYlrdAXWpfaA6g9T03JTw94BrRzl8QK5Oc7+YXPN5SHpoIvQHWhoke7QGpplfLqK4yY91cqWJUEjRIBI9xI7Sm/a0/8A5FEY6pfIoW4j0q5uZj+qrLrOPi/DKsql8e9eapxojseh2GB9CCAQfhL5Tc0pjdWVnhWZTdUtmOytT1VSn5fYPKQPkQR9J0C1SxUMvMNEjY5gD2JHp2P6TzM5WVwOxMOusZWFe7eRzMKrq3YgmovrlJJOx79nt2mzEbi/32/Oo4cta3JWr15F9R21YKqyFTtenprXf6Vmf0t4fe158QcDozaWx8hAyHsenPW3o6n0P+3aVDhN+Y3mcFuy2pzKQHqyFRXOVjb0Dpj+bsCd76euiTZPDGNnL5lufdW1lhXlqpGqcdRvopPVid9d+4TuyuD02ZFWWynzqQ4RgWA1YNMGA6N9e0mzfaJddPPeM8Ar4bfj59zW5VZby7rclvMtxyx/DuX0Cg7+Xp1MtPG86jFTzci1Er9Cepb10oHVj8pLeJOHLkYl+O3aytx8m1tWHxBAP0nnv2d4nn1JxXP1ZyKtGKpHMEWr2Ws0enOSp6n90n3ayzx8b16b8ed0neBeJ8TLfyqLgbNb5WV62YdyVDAc30ljTG98pnEeJJxDiOIuJWxbEsZ77gB5dacujTz/ALRPbX+ur5M7Vss8vsEREhkREQEREBERAREQEREBERATKge6YiBH+IuB0ZtPk3g6B5kZTy2VOOzofQ/ylN49kcX4fjBvvtF1QZK+d6fx0DHlVmO9HR0NnZO56FNOXipajVWor1uCGVhtWB9DLeVJ0r/g3w/thxLKvfJzHUqGcKqULshkrQdF9evxPbZ3cZxYNS0otVagIo0BsnQ+ZnQLhN8c8dM8pbW2Jr80TPmj3y3lP9V1XB4g4JTmUNjXqSjaII6OjD8rqfQj+4PQyr1NxrCHlCqniNQ6I/mLj5IHp5nP0Pp22feZd/MHvjzRIvj72tLZ1pC+HbuIOzPm1Y1NZHsV1s1lwPrzv+X9P9+3i+eagOUAsxPfsNd/8p2G4TkzaVtADDsd9O8pnl+tmN7Wwk85cp014fExZW7EaZASR6EaJ2P0nlXhTPyL+F1cMwaLDZ7fmZL+xj43PY7eye7tyt2HbfrPVsfERN8o79D3Ox7us21VqqhVUKoGgFACqB6ADtMfK3GTJpvGZW4uHgPCKsShMakaVB1OgGsb9p2+JkhESFSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJw8YzGqrDKBsnW2BKr0J2QOp7AfNh37HkHF3CVuUBDMVZl2E/KSCAeo66HX1BHugTMSKXjQO9VWezsnfL0VSAT/xe0PZ7z5HHNdGqcMHKldoWABOjoHuR2Hr6bgS8SJfiznlVKyGcrrmBYcrKzKTrWj7JGvTv1i/jXKvOanC9fzEA+yQpJ1sAb2Nn1100dwJaJE38Z5VLeWR+blLEBTy8wPN+71XQ9/MvvnTw7O80uCoHIddCSfXv00O3bZ79dQO2IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgYI30PaZA12iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//Z'/>
          <p>Please make sure to enter your credentials.</p>
          <button onclick='window.close()' style='padding:5px 10px; background:red; color:white; border:none; border-radius:5px;'>Close</button>
        </div>
      `);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <style jsx>{`
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 92vh;
          weidth: 100vh;
          background: #8fd3fe url('https://img.freepik.com/premium-photo/book-with-pencils-pencils-table_979520-88694.jpg') no-repeat center center;
          background-size: cover; /* Adjust to fit */
          padding: 20px;
        }
        input {
          margin: 10px;
          padding: 8px;
          width: 200px;
        }
        button {
          padding: 10px 20px;
          background:rgb(144,202,249);
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
