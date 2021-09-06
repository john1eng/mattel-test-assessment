package com.example.springboottomcat.models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long statusId;

    @Column
    private String status;

    @Column
    private LocalDate date;

    public Status() {
    }

    public Status(String status, LocalDate date) {
        this.status = status;
        this.date = date;
    }

    public Status(Long statusId, String status, LocalDate date) {
        this.statusId = statusId;
        this.status = status;
        this.date = date;
    }

    public Long getStatusId() {
        return statusId;
    }

    public void setStatusId(Long statusId) {
        this.statusId = statusId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @OneToOne(mappedBy = "status")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Status status1 = (Status) o;
        return Objects.equals(statusId, status1.statusId) &&
                Objects.equals(status, status1.status) &&
                Objects.equals(date, status1.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(statusId, status, date);
    }

    @Override
    public String toString() {
        return "Status{" +
                "statusId='" + statusId + '\'' +
                ", status='" + status + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
