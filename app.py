from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")
    return jsonify({"message": f"Thank you, {name}! We will get back to you soon."})

if __name__ == "__main__":
    app.run(debug=True)
