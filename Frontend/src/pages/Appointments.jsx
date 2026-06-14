import React, { useEffect, useState } from 'react'

import {
  getAllAppointments,
  createAppointment,
    deleteAppointment
} from "../services/appointment";


import { getAllDoctors } from "../services/doctorsService";


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
const [doctors, setDoctors] = useState([]);

const [formData, setFormData] = useState({
  doctor: "",
  date: "",
  reason: "",
});

async function handleDelete(id) {
  try {
    await deleteAppointment(id);

    setAppointments((prev) =>
      prev.filter(
        (appointment) => appointment._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
}

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createAppointment(formData);

    fetchAppointments();

    setFormData({
      doctor: "",
      date: "",
      reason: "",
    });
  } catch (error) {
    console.log(error);
  }
};
async function fetchAppointments() {
  try {
    const data = await getAllAppointments();

    setAppointments(data);
  } catch (error) {
    console.log(error);
  }
}

async function fetchDoctors() {
  try {
    const data = await getAllDoctors();

    setDoctors(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  fetchDoctors();
  fetchAppointments();
}, []);

  return (
<section className="py-24 min-h-screen bg-slate-50">
  <div className="container w-10/12 mx-auto">
    
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-main">
        Appointments
      </h1>
      <p className="text-gray-500 mt-2">
        Schedule and manage your appointments
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Form */}

      <div className="bg-white p-6 rounded-2xl shadow-xl h-fit sticky top-28">
        <h2 className="text-2xl font-bold mb-6">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium">
              Doctor
            </label>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option value="">
                Select Doctor
              </option>

              {doctors.map((doctor) => (
                <option
                  key={doctor._id}
                  value={doctor._id}
                >
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Appointment Date
            </label>

            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Reason
            </label>

            <textarea
              rows="4"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 resize-none"
            />
          </div>

          <button
            className="w-full bg-main text-white py-3 rounded-lg font-semibold"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Appointments */}

      <div className="lg:col-span-2">

        {appointments.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">
              No appointments yet
            </h3>

            <p className="text-gray-500">
              Book your first appointment.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition"
              >
                <div className="p-5">

                  <div className="flex justify-between items-center">

                    <h3 className="font-bold text-xl">
                      {appointment.doctor?.name}
                    </h3>
                  </div>

                  <p className="text-main font-medium mt-1">
                    {appointment.doctor?.specialty}
                  </p>

                  <div className="mt-4 space-y-2">

                    <p className="text-gray-600">
                      📅{" "}
                      {new Date(
                        appointment.date
                      ).toLocaleDateString()}
                    </p>

                    <p className="text-gray-600">
                      ⏰{" "}
                      {new Date(
                        appointment.date
                      ).toLocaleTimeString()}
                    </p>

                    <p className="font-medium">
                      Reason
                    </p>

                    <p className="text-gray-500">
                      {appointment.reason}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(
                        appointment._id
                      )
                    }
                    className="mt-5 w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  </div>
</section>
  )
}

export default Appointments
