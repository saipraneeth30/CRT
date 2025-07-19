import React, {useState} from "react";

function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      eamil: "",
      Phone_no:"",
      message: "",
   });

   const handleChange = (e) => {
   const { name, value } = e.target;

   setFormData((prevData) => ({
      ...prevData,
      [name]: value,
   }));
};

const handleSubmit = (e) => {
   e.preventDefault();
   console.log("Form submitted:", fromData);

   setFormaData({
    name:"",
    email:"",
    message:"",
   });
};
return (
    <div className="form">
        <center>
            <h2>Contact us</h2>
            <form onsSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    />
                </label>
                <br /><br />
                <label>
                    Email:
                    <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    />
                </label>
                <br /><br />
                <label>
                Phone No:
                <input type="text"
                name="Phone_no"
                value={formData.Phone_no}
                onChange={handleChange}
                required></input>
                </label>
                <br /><br />
                <label>
                Message:
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required></textarea>
                </label>
            </form>
        </center>
    </div>
)
}
export default ContactForm;