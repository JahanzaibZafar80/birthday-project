from flask import Flask, render_template

app = Flask(__name__)

birthday_data = {
    "name": "Saqlain",
    "version": "2026.1",
    "status": "Good Boy",
    "happiness": "100%",
    "cake": "READY 🎂"
}


@app.route("/")
def home():
    return render_template(
        "index.html",
        birthday=birthday_data
    )


if __name__ == "__main__":
    app.run(debug=True)