import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateTicket, GetDatabyId } from "../../grapql";
// import axios from "axios";
import "./edit.css";
import NavbarPage from "../../components/navbar";
const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: dataid } = useQuery(GetDatabyId, { variables: { id: id } });
  useEffect(() => {
    setTitle(dataid?.ticket_by_pk.nama_film);
    setJamTayang(dataid?.ticket_by_pk.jam_tayang);
    setTanggalTayang(dataid?.ticket_by_pk.tanggal_tayang);
    setJumlahTiket(dataid?.ticket_by_pk.jumlah_tiket);
  }, [dataid]);
  const [title, setTitle] = useState("");
  const [jamTayang, setJamTayang] = useState("");
  const [tanggalTayang, setTanggalTayang] = useState("");
  const [jumlahTiket, setJumlahTiket] = useState("");
  const [updateTicket] = useMutation(UpdateTicket);

  const UpdateSubmit = () => {
    updateTicket({
      variables: {
        id: id,
        nama_film: title,
        tanggal_tayang: tanggalTayang,
        jam_tayang: jamTayang,
        jumlah_tiket: jumlahTiket,
      },
    });
    navigate("/my-ticket");
  };
  return (
    <div className="bg-dark">
      <NavbarPage />

      <div className="d-flex left-content container ">
        <Form className="mt-5 mb-5 text-white">
          <h1 className="bg-dark text-white text-center mt-3">Edit Ticket</h1>

          <Form.Group className="mb-3  align-items-start ">
            <Form.Label>Nama Tiket</Form.Label>
            <Form.Control
              name="namafilm"
              type="text"
              value={title}
              required
              placeholder="Masukan Nama Film"
              // onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <p>Pilih jam </p>
            <div className="select-tiket">
              <select
                name="jamTayang"
                onChange={(e) => setJamTayang(e.target.value)}
                value={jamTayang}
              >
                <option value="15:00" selected>
                  15:00
                </option>
                <option value="19:00">19:00</option>
                <option value="21:00">21:00</option>
                <option value="10:00">10:00</option>
              </select>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <p>Ganti Tanggal Tayang</p>
            <div className="select-tiket">
              <select
                name="tangaltayang"
                value={tanggalTayang}
                onChange={(e) => setTanggalTayang(e.target.value)}
              >
                <option value="22 november" selected>
                  22 november
                </option>
                <option value="23 november">23 november</option>
                <option value="24 november">24 november</option>
              </select>
            </div>
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Jumlah Tiket</Form.Label>
            <Form.Control
              name="jumlahtiket"
              value={jumlahTiket}
              type="number"
              required
              onChange={(e) => setJumlahTiket(e.target.value)}
              placeholder="Jumlah tiket"
            />
          </Form.Group>
          <Button onClick={UpdateSubmit}>Edit Tiket</Button>
        </Form>
      </div>
    </div>
  );
};

export default EditTicket;
