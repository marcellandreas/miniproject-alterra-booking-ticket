import { gql } from "@apollo/client";

export const GetDatas = gql`
  query MyQuery {
    ticket {
      durasi_film
      harga
      id
      jumlah_tiket
      jam_tayang
      nama_film
      tanggal_tayang
      gambar
      id_film
    }
  }
`;

export const GetDatabyId = gql`
  query MyQuery($id: Int!) {
    ticket_by_pk(id: $id) {
      id
      jam_tayang
      jumlah_tiket
      nama_film
      tanggal_tayang
    }
  }
`;

export const InsertTicket = gql`
  mutation MyMutation($object: ticket_insert_input!) {
    insert_ticket_one(object: $object) {
      id
      nama_film
      jam_tayang
      jumlah_tiket
      tanggal_tayang
      id_film
      gambar
    }
  }
`;

export const DeleteTicket = gql`
  mutation MyMutation($id: Int!) {
    delete_ticket_by_pk(id: $id) {
      id
    }
  }
`;

export const UpdateTicket = gql`
  mutation MyMutation(
    $id: Int!
    $nama_film: String = "nama_film"
    $tanggal_tayang: String = "tanggal_tayang"
    $jumlah_tiket: String = "jumlah_tiket"
    $jam_tayang: String = "jam_tayang"
  ) {
    update_ticket_by_pk(
      pk_columns: { id: $id }
      _set: {
        nama_film: $nama_film
        tanggal_tayang: $tanggal_tayang
        jumlah_tiket: $jumlah_tiket
        jam_tayang: $jam_tayang
      }
    ) {
      id
      nama_film
      jumlah_tiket
      jam_tayang
      tanggal_tayang
    }
  }
`;
