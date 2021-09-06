package com.example.springboottomcat.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false)
    private String first;

    @Column(nullable = false)
    private String last;

    @Column(nullable = false)
    private String contact;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String business;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "status_id")
    private Status status;

    public User() {
    }

    public User(Long userId, String first, String last, String contact, String email, String address, String business) {
        this.userId = userId;
        this.first = first;
        this.last = last;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.business = business;
    }

    public User(String first, String last, String contact, String email, String address, String business) {
        this.first = first;
        this.last = last;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.business = business;
    }

    public User(String first, String last, String contact, String email, String address, String business, Status status) {
        this.first = first;
        this.last = last;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.business = business;
        this.status = status;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBusiness() {
        return business;
    }

    public void setBusiness(String business) {
        this.business = business;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId &&
                Objects.equals(first, user.first) &&
                Objects.equals(last, user.last) &&
                Objects.equals(contact, user.contact) &&
                Objects.equals(email, user.email) &&
                Objects.equals(address, user.address) &&
                Objects.equals(business, user.business) &&
                Objects.equals(status, user.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, first, last, contact, email, address, business, status);
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", first='" + first + '\'' +
                ", last='" + last + '\'' +
                ", contact='" + contact + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", business='" + business + '\'' +
                '}';
    }
}
