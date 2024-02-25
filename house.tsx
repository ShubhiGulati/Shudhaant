import React from "react";
import Image from "next/image";
export default function House() {
  return(
 <>
 <form action="/submit-form" method="post">
   <label for="electricity">Electricity:</label><br>
   <input type="text" id="electricity" name="electricity" required><br>

   <label for="email">Email:</label><br>
   <input type="text" id="email" name="email" required><br>

   <label for="message">Message:</label><br>
   <textarea id="message" name="message" rows="4" cols="50" required></textarea><br>

   <input type="submit" value="Submit">
 </form>
</>
)

}
