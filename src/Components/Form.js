// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
const Form = () => {
    return (  
        <form name='contact v1' method='post' action='/thanks'>

            <input type="hidden" name='form-name' value='contact v1'/> <br/>
            <input type="text" name='first-name'  placeholder='first-name'/> <br/>
            <input type="text" name='email' placeholder='Email'/> <br/>
            <textarea name="message" id="" cols="30" rows="10"></textarea> <br/>
            <button type='submit'>Send Message</button>
        </form>
    );
}
 
export default Form;