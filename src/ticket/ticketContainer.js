import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ticket.css";
import { useMutation } from "@apollo/client";
import { GetDatas, InsertTicket } from "../grapql";
import swal from "sweetalert";
import TicketPage from "./ticket";
import { useNavigate } from "react-router-dom";

const TicketContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datasbyid, setDatasbyid] = useState([]);
  const [title, setTitle] = useState("");
  const [idFilm, setidFilm] = useState("");
  const [gambar, setGambar] = useState("");
  const [insertTiket] = useMutation(InsertTicket, {
    refetchQueries: [GetDatas],
  });

  const [dataFilm, setDataFilm] = useState({
    id: "",
    namafilm: "",
    tangaltayang: "22 november",
    jamTayang: "15:00",
    jumlahtiket: "1",
    gambar: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: { api_key: process.env.REACT_APP_TMBD_KEY },
      })
      .then((res) => {
        console.log("datas =>", res.data);
        setLoading(false);
        setTitle(res.data.title);
        setidFilm(res.data.id);
        setDatasbyid(res.data);
        setGambar(`${process.env.REACT_APP_IMG_URL}/${res.data.poster_path}`);
        setDataFilm({
          id: res.data.id,
          namafilm: res.data.title,
          tangaltayang: "22 november",
          jamTayang: "15:00",
          jumlahtiket: "1",
          gambar: `${process.env.REACT_APP_IMG_URL}/${res.data.poster_path}`,
        });
      });
  }, [id]);

  const onChange = (e) => {
    setDataFilm({
      ...dataFilm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    swal({
      title: "Apakah Data Telah sesuai?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willInsertData) => {
      if (willInsertData) {
        insertTiket({
          variables: {
            object: {
              id: dataFilm.id,
              nama_film: dataFilm.namafilm,
              jam_tayang: dataFilm.jamTayang,
              tanggal_tayang: dataFilm.tangaltayang,
              jumlah_tiket: dataFilm.jumlahtiket,
              gambar: dataFilm.gambar,
            },
          },
        });
        swal("Data Ticket Berhasil Ditambahkan", {
          icon: "success",
        });
        navigate("/my-ticket");
      } else {
        swal("Data Ticket Gagal ditambahkan ");
      }
    });
  };

  console.log("data state data?", dataFilm);
  return (
    <>
      <TicketPage
        onChange={onChange}
        handleSubmit={handleSubmit}
        datasbyid={datasbyid}
        title={title}
        idFilm={idFilm}
        loading={loading}
        gambar={gambar}
      />
    </>
  );
};

export default TicketContainer;
