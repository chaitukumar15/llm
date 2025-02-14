

var express= require("express");

var app=express();

app.use(express.json())


app.get("/",(req,res)=>{


    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-lite-preview-02-05:free",
          "messages": [
            {"role": "user", "content": req.body.msg}
          ],
          "top_p": 1,
          "temperature": 0.4,
          "repetition_penalty": 1
        })
      }).then((val)=>{
        return val.json()
      }).then((val)=>{

        res.send(val)

      })

})



app.listen(3000,()=>{
    console.log("hi server stareted");
    
})
