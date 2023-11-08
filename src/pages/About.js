import React from "react";
import foto from "../assets/me.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>

        <img src={foto} alt="Deskripsi Gambar" />

        <ul>
            <li>Name   : Nurani syahidah</li>
            <li>NIM    : 2200462 </li>
            <li>Class  : Computer Science Education A 2022</li>
            <li>Date of Birth    : February 10,2003</li>
            <li>Place of Origin: Mataram-Lombok, West Nusa Tenggara (NTB)</li>
          </ul>   
        <p>
          <hr/>
          My name is Nurani Syahidah, a third-semester student in the Computer Science Education program, class A of 2022, at the Universitas Pendidikan Indonesia (UPI). I was born in Mataram on February 10, 2003, and I also come from Mataram-Lombok, West Nusa Tenggara (NTB). Lately, I have many hobbies, including learning, coding, drawing, listening to music, cooking, watching movies, and traveling.
        </p>
        <p>
          The reason I enrolled in the Computer Science Education program at UPI is because I have a strong interest in the field of technology and computer science. I believe that computer science is one of the most influential and essential fields in the development of the modern world. Therefore, I want to contribute to shaping a better future through education and technology. I also plan to give back by teaching the knowledge I acquire, either as a teacher or a lecturer.
        </p>
      </div>
    </div>
  );
}

export default About;