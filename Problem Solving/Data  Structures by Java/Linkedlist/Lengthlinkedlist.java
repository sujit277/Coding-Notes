/* Java Program to find the length Linked List Elements */

public class Lengthlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data=data;
this.next=null;
}
}
public int length()
{
if(head==null)
{
return 0;
}
int count=0;
Listnode current = head;
while(current!=null)
{
count++;
current= current.next;
}
return count;
}

public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+ "-->");
current=current.next;
}
System.out.println("null");
}
public static void main(String args[])
{
Lengthlinkedlist sll = new Lengthlinkedlist();
sll.head = new Listnode(10);
Listnode second = new Listnode(1);
Listnode third = new Listnode(5);
Listnode fourth = new Listnode(11);
sll.head.next = second;// 10--->1
second.next = third;// 10-->1-->5
third.next = fourth;// 10-->1-->5-->11-->null
sll.display();
System.out.println("Length of the Linkedlist "+sll.length());
}
}