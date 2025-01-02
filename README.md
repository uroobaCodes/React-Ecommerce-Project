# 🔍 Learning About React Ecommerce Store
This is a very simple ecommerce store. I was able to integrate paypal to it as well for testing purpose. I am glad I made a paypal profile while I was in Sharjah. I have used React Router, contextAPI, Immer, Bootstrap, Styled Components, and React Icons for this project. This Freecodecamp project is six years old. The syntax for react and react router in this project and the one that I learned are like night and day. But I made it work. Here is the website for the project: [Ecommerce Store](https://reactrouter-ecommerce.netlify.app/)


# 📜 Key Learning Points:

**1- PropTypes** PropTypes is deprecated in React 19 and I am not familiar with TypeScript. To check the type for our properties, in case there are edge cases, I used manual validation with JavaScript functions. 


**2- Changing Properties** Since we always create copy of the data and then change the properties, I wanted to write a small test to make sure I am not changing the original data. I used both the spread operator and immer to test the new state vs our origional data. And I was able to not only keep the original data intact but also make changes to the one of the properties in our copied state data. 

**3- Bootstrap and Styled Components with props** Styled components are great in terms of taking away a lot of re-writing of the same designs. There was a lot of css at work, there are global styles, css modules, bootstrap classes and styled components. I like bootstrap over the rest of them. But for variables, it is great to have a global file with the app's colors. Though I find it challenging to make changes to the bootstrap styles, even though I would take a bootstrap navbar over designing a custom one any day! It was interesting to use the props from styled components. React thinks of styled component props as html attributes. So an interesting solution is to use **Transient Props** instead. 

**4- Paypal** This project was using the "react paypal express checkout" which did not sync with my project. So I am using **react paypal js** instead. It was interesting to work with the paypal for developers and the sandbox as well. I was able to add our cart's totals to the paypal totals. Since this project was very old, I had to find blogs and youtube videos to learn what we are currently doing. I am not good with backend code, but somehow the paypal provided components is responding to the items increasing and decreasing. Before, it just showed only one value. 
 

### 🔮 Future Learning
I have made this project, but there were so many tools being used, I will be going back again to relearn and revisit the gotcha moments. 

### 😊 Contact me
If you have any suggestions or want to share knowledge about React hooks, feel free to reach out!

🌟 GitHub: uroobaCodes 🌟 Email: urooba.codes@gmail.com
