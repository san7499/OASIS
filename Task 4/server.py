from flask import Flask, request, jsonify

app = Flask(__name__)

users = {}

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    if username in users and users[username] == password:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False, "message": "Invalid username or password."})

if __name__ == "__main__":
    app.run(debug=True)