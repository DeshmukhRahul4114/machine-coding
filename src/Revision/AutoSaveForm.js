import React, { useRef, useState ,useEffect} from 'react';

const AutoSaveForm = () => {
    const [formData,setFormData]=useState({
        fullName:'',
        email:'',
        message:''
    });

  const [isSaving, setIsSaving] = useState(false);
    const timeoutRef=useRef(null)

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    // Simulated save function
  const saveForm = () => {
    console.log("Auto-saving form data:", formData);
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 500); // Simulate saving time
  };

  // Effect to manage auto-save logic
  useEffect(() => {
    // Clear any existing timeout to debounce save
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to save after 2 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      saveForm();
    }, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutRef.current);
  }, [formData])

    return (
        <div>
            <h1>Auto save form</h1>
            <div>
                <label>
                    Name:
                    <input type='text' name="fullName" value={formData.name} onChange={handleChange}></input>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type='email' name="email" value={formData.name} onChange={handleChange}></input>
                </label>
            </div>
            <div>
                <label>
                    Message:
                    <textarea  name="message" value={formData.name} onChange={handleChange}></textarea>
                </label>
            </div>
            <p style={{ color: isSaving ? "green" : "black" }}>
        {isSaving ? "Saving..." : "All changes are saved."}
      </p>
        </div>
    );
};

export default AutoSaveForm;