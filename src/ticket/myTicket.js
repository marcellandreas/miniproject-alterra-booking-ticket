import { Button, Image, Stack, Table } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { GetDatas, DeleteTicket } from "../grapql";
import "./ticket.css";
import { Link } from "react-router-dom";
import NavbarPage from "../components/navbar";
import swal from "sweetalert";
import { FaTrash, FaEdit } from "react-icons/fa";
import LoadingPage from "../loading";
import image from "../assets/12345.jpg";

const MyTicket = () => {
  const { data: dataTicket, loading, error } = useQuery(GetDatas);
  const [deleteTicket] = useMutation(DeleteTicket, {
    refetchQueries: [GetDatas],
  });
  console.log("gambar gambar, ", dataTicket);
  if (loading) {
    <LoadingPage />;
  }

  if (error) {
    alert("Something Wrong!!");
  }

  const DeleteSubmit = (idx) => {
    swal({
      title: "Apa Anda Yakin Menghapus Ticket Ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteTicket({
          variables: {
            id: idx,
          },
        });
        swal("Data Ticket Berhasil dihapus", {
          icon: "success",
        });
      } else {
        swal("Data Ticket Gagal dihapus ");
      }
    });
  };

  return (
    <>
      <NavbarPage />
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-dark my-ticket-container ">
          <Stack className="my-ticket mb-5 container">
            <h1 className="text-white p-3">Your Ticket</h1>
            <div className=" d-flex flex-column">
              {dataTicket?.ticket.map((data, index) => {
                return (
                  <div className="card-myticket d-flex m-1" key={index}>
                    <div className="my-ticket-img p-3">
                      <Image
                        src={`${data.gambar}`}
                        style={{ width: "150px", height: "200px" }}
                      />
                    </div>
                    <div className="my-ticket-detail d-flex flex-column justify-content-between text-white">
                      <div className="my-ticket-content">
                        <h4>{data.nama_film}</h4>
                        <p>Studio</p>
                        <p>
                          {data.tanggal_tayang} | {data.jam_tayang}
                        </p>
                        <p>Jumlah Ticket: {data.jumlah_tiket}</p>
                      </div>
                      <div className="myticket-action d-flex flex-row justify-content-between">
                        <div className=" mb-1 p-2">
                          <Link className="my-ticket-bayar ">Bayar {">"} </Link>
                        </div>
                        <div>
                          <Link to={`/my-ticket/edit/${data.id}`}>
                            <Button className="m-1 mytikect-button">
                              {" "}
                              <FaEdit className="font-icons" />
                            </Button>
                          </Link>
                          <Button
                            className="m-1 mytikect-button"
                            onClick={() => {
                              DeleteSubmit(data.id);
                            }}
                          >
                            <FaTrash className="font-icons" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Stack>
        </div>
      )}
    </>
  );
};

export default MyTicket;
