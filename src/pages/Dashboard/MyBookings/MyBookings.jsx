const handleBookAppointment =
  async (e) => {

    e.preventDefault();

    const form = e.target;

    const patientName =
      form.patientName.value;

    const gender =
      form.gender.value;

    const phone =
      form.phone.value;

    const appointmentDate =
      form.appointmentDate.value;

    const appointmentTime =
      form.appointmentTime.value;

    const appointmentData = {

      email: user?.email,

      doctorName:
        doctor?.name,

      patientName,

      gender,

      phone,

      appointmentDate,

      appointmentTime,

      fee: doctor?.fee,

    };

    try {

      const res = await fetch(
        "https://doctor-appointment-server-seven.vercel.app/appointments",
        {
          method: "POST",

          headers: {
            "content-type":
              "application/json",
          },

          body: JSON.stringify(
            appointmentData
          ),
        }
      );

      const data =
        await res.json();

      if (
        data.insertedId
      ) {

        toast.success(
          "Appointment booked successfully!"
        );

        navigate(
          "/dashboard/my-bookings"
        );

      }

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to book appointment"
      );

    }

  };