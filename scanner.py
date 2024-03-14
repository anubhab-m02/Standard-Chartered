import cv2
import pytesseract
import re
import json


# Function to capture image using OpenCV
def capture_image():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Unable to open webcam")
        return None

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Unable to capture frame")
            break

        cv2.imshow("Frame", frame)

        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            break
        elif key == ord('c'): # to capture the image
            cv2.imwrite("scanned_image.jpg", frame)
            print("Image captured successfully!")
            break

    cap.release()
    cv2.destroyAllWindows()
    return "scanned_image.jpg"


# Function to extract text from image using pytesseract OCR
def extract_text(image_path):
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray, lang='eng', config='--psm 6')
    return text


# Function to extract PAN card data
def extract_pan_data(text):
    pan_pattern = r"[A-Z]{5}[0-9]{4}[A-Z]{1}"
    dob_pattern = r"\d{2}/\d{2}/\d{4}"
    name_pattern = r"[A-Z ]+"
    pan_match = re.search(pan_pattern, text)
    dob_match = re.search(dob_pattern, text)
    name_match = re.search(name_pattern, text)
    pan = pan_match.group() if pan_match else None
    dob = dob_match.group() if dob_match else None
    name = name_match.group() if name_match else None
    return {"PAN": pan, "Date of Birth": dob, "Name": name, "ID Type": "PAN"}


# Function to extract Aadhaar card data
def extract_aadhaar_data(text):
    uid_pattern = r"\d{4}\s\d{4}\s\d{4}"
    dob_pattern = r"\d{2}/\d{2}/\d{4}"
    name_pattern = r"[A-Z ]+"
    uid_match = re.search(uid_pattern, text)
    dob_match = re.search(dob_pattern, text)
    name_match = re.search(name_pattern, text)
    uid = uid_match.group() if uid_match else None
    dob = dob_match.group() if dob_match else None
    name = name_match.group() if name_match else None
    return {"Aadhaar Number": uid, "Date of Birth": dob, "Name": name, "ID Type": "Aadhaar"}


# Main function
def main():
    # Capture image
    image_path = capture_image()
    if not image_path:
        print("Failed to capture image.")
        return

    # Extract text from image
    text = extract_text(image_path)

    # Check if PAN card or Aadhaar card
    if any(keyword in text.lower() for keyword in ["income", "tax", "department"]):
        data = extract_pan_data(text)
    elif any(keyword in text.lower() for keyword in ["male", "female", "transgender"]):
        data = extract_aadhaar_data(text)
    else:
        print("Unrecognized card type or unable to extract data.")
        return

    # Print extracted data
    print("Extracted data:")
    print(data)

    # Save data to JSON file
    with open("extracted_data.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
        print("Data saved to extracted_data.json")


if __name__ == "__main__":
    main()
