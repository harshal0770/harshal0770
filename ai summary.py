import tkinter as tk
from tkinter import ttk, messagebox
from transformers import pipeline
import spacy
from heapq import nlargest

# Load the pre-trained model for summarization
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")
# Load spaCy for rule-based summarization
nlp = spacy.load("en_core_web_sm")


# Function to summarize notes using AI Summary (Transformers)
def summarize_with_ai(notes_text):
    try:
        summary = summarizer(notes_text, do_sample=False)
        return summary[0]['summary_text']
    except Exception as e:
        messagebox.showerror("Error", f"Error with AI Summary: {str(e)}")
        return ""


# Function for rule-based summarization using spaCy
def summarize_with_spacy(notes_text, num_sentences=3):
    try:
        doc = nlp(notes_text)
        sentence_scores = {}
        for sentence in doc.sents:
            score = 0
            for word in sentence:
                if not word.is_stop and not word.is_punct:
                    score += word.rank
            sentence_scores[sentence] = score

        top_sentences = nlargest(num_sentences, sentence_scores, key=sentence_scores.get)
        summary = " ".join([sent.text for sent in top_sentences])
        return summary
    except Exception as e:
        messagebox.showerror("Error", f"Error with Rule-Based Summary: {str(e)}")
        return ""


# Function to trigger summarization
def summarize():
    # Get the text from the input box
    input_text = notes_textbox.get("1.0", "end-1c").strip()
    if not input_text:
        messagebox.showwarning("Input Required", "Please enter some lecture notes to summarize.")
        return

    # Choose the summarization method
    method = method_var.get()
    if method == "AI Summary":
        summary = summarize_with_ai(input_text)
    elif method == "Rule-Based Summary":
        summary = summarize_with_spacy(input_text)
    else:
        messagebox.showwarning("Method Selection", "Please choose a summarization method.")
        return

    # Display the summary in the output box
    summary_textbox.config(state=tk.NORMAL)
    summary_textbox.delete("1.0", "end")
    summary_textbox.insert("1.0", summary)
    summary_textbox.config(state=tk.DISABLED)


# UI Design using Tkinter with Professional Look
root = tk.Tk()
root.title("Smart Notes Summarizer")
root.geometry("850x650")
root.config(bg="#f0f5f9")

# Custom Styles
style = ttk.Style()
style.configure("TButton", font=("Helvetica", 12, "bold"), background="#4CAF50", foreground="white")
style.configure("TLabel", font=("Helvetica", 12), background="#f0f5f9", foreground="#333")
style.configure("TText", font=("Helvetica", 12), borderwidth=2, relief="solid")

# Heading
heading_label = ttk.Label(root, text="Smart Notes Summarizer", font=("Helvetica", 24, "bold"))
heading_label.pack(pady=20)

# Input Text Area
notes_label = ttk.Label(root, text="Enter Your Lecture Notes:")
notes_label.pack(anchor="w", padx=20)
notes_textbox = tk.Text(root, height=12, width=80, wrap="word", font=("Helvetica", 12), bd=2, relief="solid")
notes_textbox.pack(padx=20, pady=10)

# Method Selection
method_var = tk.StringVar()
method_var.set("AI Summary")  # Default method

method_frame = ttk.Frame(root)
method_frame.pack(pady=10)

ai_radio = ttk.Radiobutton(method_frame, text="AI Summary", variable=method_var, value="AI Summary")
rule_radio = ttk.Radiobutton(method_frame, text="Rule-Based Summary", variable=method_var, value="Rule-Based Summary")
ai_radio.pack(side="left", padx=10)
rule_radio.pack(side="left", padx=10)

# Summarize Button - Centered and Prominent
button_frame = ttk.Frame(root)
button_frame.pack(pady=30)
summarize_button = ttk.Button(button_frame, text="Summarize Notes", style="TButton", command=summarize)
summarize_button.pack(ipadx=10, ipady=5)

# Output Text Area
summary_label = ttk.Label(root, text="Summary of Notes:")
summary_label.pack(anchor="w", padx=20)
summary_textbox = tk.Text(root, height=12, width=80, wrap="word", font=("Helvetica", 12), bd=2, relief="solid", state=tk.DISABLED)
summary_textbox.pack(padx=20, pady=10)

# Run the Application
root.mainloop()