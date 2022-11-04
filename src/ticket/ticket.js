import NavbarContainer from "../components/navbar";
import "./ticket.css";
import { Stack, Card, Image, Form, Button } from "react-bootstrap";
import { HiTicket } from "react-icons/hi";
import LoadingPage from "../loading";

const TicketPage = ({
  onChange,
  handleSubmit,
  datasbyid,
  title,
  idFilm,
  loading,
}) => {
  return (
    <>
      <NavbarContainer />
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          {datasbyid && (
            <Stack>
              <div
                className="big-world"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_IMG_URL}/${datasbyid.backdrop_path})`,
                }}
              >
                <div className="ticket-container d-flex container flex-column-reverse mt-2">
                  <Form className="form-container mt-5 mb-5   me-4 pb-3">
                    <h1 className="bg-dark text-white text-center mt-3">
                      Get Ticket
                    </h1>
                    <Form.Group className="mb-3 ">
                      <Form.Label>ID Film</Form.Label>
                      <Form.Control
                        name="id"
                        type="text"
                        value={idFilm}
                        required
                        placeholder="Masukan Id"
                        onChange={onChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column align-items-start">
                      <Form.Label>Nama Tiket</Form.Label>
                      <Form.Control
                        name="namafilm"
                        type="text"
                        value={title}
                        required
                        placeholder="Masukan Nama Film"
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex flex-column align-items-start">
                      <p>Pilih jam </p>
                      <div className="select-tiket">
                        <select name="jamTayang" onChange={onChange}>
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
                      <Form.Label>Jumlah Tiket</Form.Label>
                      <Form.Control
                        name="jumlahtiket"
                        type="number"
                        required
                        placeholder="Jumlah tiket"
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Button className="button" onClick={handleSubmit}>
                      <HiTicket className="me-1" />
                      Beli Tiket
                    </Button>
                  </Form>

                  <Card className="ms-3 p-3 card-container ">
                    <div className="card-ticket d-flex flex-row justify-content-center align-items-center">
                      <div>
                        <Image
                          className="image-ticket"
                          src={`${process.env.REACT_APP_IMG_URL}/${datasbyid.poster_path}`}
                        />
                      </div>
                      <div className="detail-information-card">
                        <Card.Text>ID Film: {datasbyid.id}</Card.Text>
                        <Card.Title className="text-uppercase fs-2">
                          {datasbyid.title}
                        </Card.Title>
                        <span>Original Title: {datasbyid.original_title}</span>
                        <Card.Text>
                          {/* {datasbyid.genres[1].name} | */}{" "}
                          {datasbyid.original_language} | {datasbyid.status}
                        </Card.Text>
                        <div className="genres mb-3">
                          {datasbyid.genres &&
                            datasbyid.genres.slice(0, 3).map((genre, i) => (
                              <span key={i} className="genres-item">
                                {genre.name}
                              </span>
                            ))}
                        </div>
                        <Card.Text>{datasbyid.overview}</Card.Text>
                        {/* <p>Pilih Tanggal Penayangan</p> */}
                        <div className="select-tiket">
                          <select className="tangaltayang" onChange={onChange}>
                            <option value="22 november" selected>
                              22 november
                            </option>
                            <option value="23 november">23 november</option>
                            <option value="24 november">24 november</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Stack>
          )}
        </div>
      )}
    </>
  );
};

export default TicketPage;

// const data = {
//   id: idFilm,
//   title: title,
//   // jam_tayang: jamTayang,
//   // tanggal_tayang: tanggalTayang,
//   // jumlah_tiket: jumlah
// };
