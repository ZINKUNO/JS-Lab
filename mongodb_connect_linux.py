import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId

# Function to establish MongoDB connection
def connect_to_mongodb():
    try:
        client = MongoClient("mongodb://localhost:27017/")  # Local MongoDB
        db = client["sample_db"]   # Database name
        collection = db["users"]   # Collection name
        print("Connected to MongoDB successfully!")
        return collection
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        return None

# Create operation
def insert_user(collection):
    try:
        name = input("Enter name: ")
        email = input("Enter email: ")
        age = int(input("Enter age: "))
        user_data = {"name": name, "email": email, "age": age}
        result = collection.insert_one(user_data)
        print(f"User inserted with ID: {result.inserted_id}")
        return result.inserted_id
    except Exception as e:
        print(f"Error inserting user: {e}")

# Read operation
def find_user(collection):
    try:
        email = input("Enter email to search: ")
        user = collection.find_one({"email": email})
        if user:
            print("User found:", user)
        else:
            print("User not found")
    except Exception as e:
        print(f"Error finding user: {e}")

# Update operation
def update_user(collection):
    try:
        email = input("Enter email of the user you want to update: ")
        new_age = int(input("Enter new age: "))
        result = collection.update_one(
            {"email": email},
            {"$set": {"age": new_age}}
        )
        if result.modified_count > 0:
            print("User updated successfully")
        else:
            print("No user updated (maybe email not found)")
    except Exception as e:
        print(f"Error updating user: {e}")

# Delete operation
def delete_user(collection):
    try:
        email = input("Enter email of the user to delete: ")
        result = collection.delete_one({"email": email})
        if result.deleted_count > 0:
            print("User deleted successfully")
        else:
            print("No user deleted (maybe email not found)")
    except Exception as e:
        print(f"Error deleting user: {e}")

# Main function to handle user choices
def main():
    collection = connect_to_mongodb()
    if collection is None:
        return

    while True:
        print("\n--- MongoDB CRUD Menu ---")
        print("1. Insert User (CREATE)")
        print("2. Find User (READ)")
        print("3. Update User (UPDATE)")
        print("4. Delete User (DELETE)")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            insert_user(collection)
        elif choice == "2":
            find_user(collection)
        elif choice == "3":
            update_user(collection)
        elif choice == "4":
            delete_user(collection)
        elif choice == "5":
            print("Exiting program...")
            break
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
