"use client";
import { useEffect, useState } from "react";
import { supabase } from "../contacts/supabaseClient";

const ADMIN_PASSWORD = "nespi"; // Админ-пароль

export default function AdminContactsPage() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Парольді тексеру
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Қате пароль!");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Вы уверены, что хотите удалить эту заявку?")) return;
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      alert("Ошибка при удалении: " + error.message);
    } else {
      setContacts(contacts.filter((c) => c.id !== id));
    }
  };

  useEffect(() => {
    if (!isAuth) return;
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        setError(error.message);
      } else {
        setContacts(data || []);
      }
      setLoading(false);
    };
    fetchContacts();
  }, [isAuth]);

  if (!isAuth) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow">
          <h2 className="mb-4 text-xl font-bold">Админ-панельге кіру</h2>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border px-4 py-2 rounded mb-4 w-full"
          />
          <button type="submit" className="bg-[#58513a] text-white px-6 py-2 rounded w-full">
            Кіру
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Заявки с формы обратной связи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p className="text-red-500">Ошибка: {error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Имя</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Телефон</th>
                <th className="px-4 py-2 border">Тема</th>
                <th className="px-4 py-2 border">Сообщение</th>
                <th className="px-4 py-2 border">Дата</th>
                <th className="px-4 py-2 border">Действие</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">Нет заявок</td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr key={c.id}>
                    <td className="border px-2 py-1">{c.name}</td>
                    <td className="border px-2 py-1">{c.email}</td>
                    <td className="border px-2 py-1">{c.phone}</td>
                    <td className="border px-2 py-1">{c.subject}</td>
                    <td className="border px-2 py-1">{c.message}</td>
                    <td className="border px-2 py-1">{new Date(c.created_at).toLocaleString("ru-RU")}</td>
                    <td className="border px-2 py-1">
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 