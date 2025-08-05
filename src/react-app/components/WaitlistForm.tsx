import { collection, addDoc } from "firebase/firestore";
import db from "@/firebase/config";
import { FormEvent, useState } from "react";
import { BeatLoader } from "react-spinners";

export default function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState<String | null>(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSuccess(null);
      setLoading(true);
      await addDoc(collection(db, "waitlist"), {
        email: email,
        signedAt: new Date(),
      });
      setSuccess("Email added to waitlist!");
    } catch (error) {
      setSuccess(`Something went wrong...`);
      console.error(`Waitlist submission error: $error`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={
        "text-white transform transition-all duration-1000 delay-800 " +
        (className ?? "")
      }
      onSubmit={handleSubmit}
    >
      <div className="p-1 border border-white/50 focus-within:border-white rounded-full">
        <input
          type="email"
          value={email}
          className="bg-transparent ml-1 focus:outline-none"
          placeholder="johndoe@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 hover:from-purple-700 to-blue-600 hover:to-blue-700 p-3 rounded-full hover:scale-105 disabled:hover:scale-100 transition-all duration-1000 transform"
          disabled={isLoading}
        >
          {isLoading ? (
            <BeatLoader
              className="px-9 scale-50"
              color="#fff"
              margin={"auto"}
            />
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>
      {success && <p className="mt-2">{success}</p>}
    </form>
  );
}
